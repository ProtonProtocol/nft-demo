import { ReactNode } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import { Main, Container } from './PageLayout.styled';
import { useModalContext, MODAL_TYPES } from '../Provider';
import {
  WithdrawModal,
  CreateSaleModal,
  CreateMultipleSalesModal,
  CancelSaleModal,
  CancelAllSalesModal,
} from '../Modal';

type Props = {
  title: string;
  children: ReactNode;
};

const PageLayout = ({ title, children }: Props): JSX.Element => {
  const { modalType } = useModalContext();

  Router.events.on('routeChangeComplete', () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  });

  const renderModal = () => {
    switch (modalType) {
      case MODAL_TYPES.WITHDRAW:
        return <WithdrawModal />;
      case MODAL_TYPES.CREATE_SALE:
        return <CreateSaleModal />;
      case MODAL_TYPES.CREATE_MULTIPLE_SALES:
        return <CreateMultipleSalesModal />;
      case MODAL_TYPES.CANCEL_SALE:
        return <CancelSaleModal />;
      case MODAL_TYPES.CANCEL_ALL_SALES:
        return <CancelAllSalesModal />;
      default:
        return null;
    }
  };

  return (
    <Main>
      <Head>
        <title>{`${title} - NFT Demo`}</title>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <Container>{children}</Container>
      {renderModal()}
    </Main>
  );
};

export default PageLayout;
