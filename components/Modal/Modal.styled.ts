import styled from 'styled-components';
import { MaxWidth } from '../../styles/MaxWidth.styled';
import { breakpoint } from '../../styles/Breakpoints';
import { StyledButton } from '../Button/Button.styled';

export const Background = styled.div`
  z-index: 3;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    rgba(14, 16, 60, 0.3),
    rgba(14, 16, 60, 0.4),
    rgba(14, 16, 60, 0.5),
    rgba(14, 16, 60, 0.6),
    rgba(14, 16, 60, 0.67)
  );
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const ModalBox = styled(MaxWidth)`
  display: flex;
  flex-direction: column;
  margin-top: 24.5vh;
  padding: 24px 24px 12px;
  border-radius: 8px;
  box-shadow: 0 8px 8px -4px rgba(0, 0, 0, 0.1), 0 0 4px 0 rgba(0, 0, 0, 0.08);
  background-color: #ffffff;

  @media (min-width: 600px) {
    max-width: 408px;
  }

  ${breakpoint.tablet`
    margin-top: 7vh;
  `}
`;

export const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const CloseIconContainer = styled.div`
  cursor: pointer;
`;

export const Title = styled.h1`
  font-family: GilroySemiBold;
  font-size: 24px;
  line-height: 32px;
  color: #0e103c;
  margin-bottom: 16px;
`;

export const Description = styled.p`
  font-family: GilroyMedium;
  font-size: 14px;
  line-height: 24px;
  color: #7578b5;
  margin-bottom: 24px;
`;

export const InputLabel = styled(Description).attrs({ as: 'label' })`
  font-size: 12px;
  display: flex;
  flex-direction: column;
  margin: 0;
`;

export const LinkDescription = styled(Description)`
  margin-bottom: 4px;
  text-align: center;
  font-size: 12px;
`;

export const WithdrawInputLabel = styled.p`
  display: flex;
  justify-content: space-between;
`;

export const AvailableBalance = styled.span`
  font-weight: 600;
  color: #8a9ef5;
`;

export const ErrorMessage = styled(Description).attrs({ as: 'span' })`
  font-size: 12px;
  color: red;
  margin-bottom: 0;
`;

export const Input = styled.input`
  font-family: GilroyMedium;
  font-size: 14px;
  line-height: 24px;
  color: #7578b5;
  border-radius: 4px;
  padding: 8px;
  border: solid 1px #e8ecfd;
  margin-bottom: 12px;

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
  }

  ::placeholder {
    color: #7578b5;
  }
`;

export const StyledLink = styled.a`
  font-family: GilroySemiBold;
  font-size: 14px;
  line-height: 24px;
  color: #8a9ef5;
  width: 100%;
  text-decoration: underline;
  cursor: pointer;
  transition: 0.2s;
  text-align: left;

  :hover {
    color: #4d5dc1;
  }
`;

export const LinkButton = styled(StyledLink).attrs({ as: 'button' })`
  padding: 0;
  border: none;
  background: none;
`;

export const Row = styled.div`
  display: flex;
`;

export const HalfButton = styled(StyledButton)`
  flex: 1;
`;

export const Spacer = styled.div`
  flex: 1;
`;
