import NodeFetch from '../utils/node-fetch';
import { Asset } from './assets';
import { Collection } from './templates';
import { addPrecisionDecimal } from '../utils';

type Price = {
  token_contract: string;
  token_symbol: string;
  token_precision: number;
  median: number | null;
  amount: number;
};

export type SaleAsset = {
  assetId: string;
  owner: string;
  salePrice: string;
};

export type Sale = {
  market_contract: string;
  assets_contract: string;
  sale_id: string;
  seller: string;
  buyer: string;
  offer_id: string;
  price: Price;
  listing_price: string;
  listing_symbol: string;
  assets: Asset[];
  collection_name: string;
  collection: Collection;
  maker_marketplace: string;
  taker_marketplace: string;
  is_seller_contract: boolean;
  updated_at_block: string;
  updated_at_time: string;
  created_at_block: string;
  created_at_time: string;
  state: number;
};

export const salesApiService = new NodeFetch<Sale>('/atomicmarket/v1/sales');

/**
 * Get the fulfilled sales for a specific templates (sales that were successful)
 * Mostly used in viewing sales history of a specific template
 * @param  {string} templateId   The template id of the history you want to look up
 * @return {Sales[]}             Returns an array of Sales for that specific template id
 */

export const getSalesHistoryForTemplate = async (
  templateId: string
): Promise<Sale[]> => {
  try {
    const latestSales = await salesApiService.getAll({
      state: '3', // Valid sale, Sale was bought
      template_id: templateId,
    });
    if (!latestSales.success) throw new Error(latestSales.message);
    return latestSales.data;
  } catch (e) {
    throw new Error(e);
  }
};

/**
 * Get the assets for sale for a specific templates (sales that are listed for sale but not sold).
 * Mostly used in viewing sales history of a specific template.
 * @param  {string} templateId   The template id of the sale assets you want to look up.
 * @return {SaleAsset[]}         Returns an array of SaleAssets for that specific template id with an additional flag: 'salePrice'.
 */

export const getSaleAssetsByTemplateId = async (
  templateId: string
): Promise<SaleAsset[]> => {
  try {
    const sales = await salesApiService.getAll({
      template_id: templateId,
      state: '1', // LISTED - Assets for sale
      sort: 'price',
      order: 'asc',
    });

    let saleAssets: SaleAsset[] = [];

    for (const sale of sales.data) {
      const {
        assets,
        listing_price,
        listing_symbol,
        price: { token_precision },
      } = sale;
      const formattedAssets = assets.map(({ asset_id, owner }) => ({
        assetId: asset_id,
        owner,
        salePrice: `${addPrecisionDecimal(
          listing_price,
          token_precision
        )} ${listing_symbol}`,
      }));
      saleAssets = saleAssets.concat(formattedAssets);
    }

    return saleAssets;
  } catch (e) {
    throw new Error(e);
  }
};
