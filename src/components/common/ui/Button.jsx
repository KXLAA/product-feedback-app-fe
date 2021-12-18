import styled from 'styled-components';

const ButtonBase = styled.button`
  display: inline;
  padding: 12px 24px;
  border-radius: 10px;
  transition: all 0.3s ease;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #f2f4fe;
  cursor: pointer;
  border: none;
`;

export const ButtonOne = styled(ButtonBase)`
  background: #ad1fea;
  &:hover:not(:disabled),
  &:disabled:not(:disabled),
  &:focus {
    background: #c75af6;
    transform: translateX(0rem) translateY(-0.125rem);
  }
  &:active:not(:disabled) {
    transform: translateX(0rem) translateY(0.125rem);
  }
  &:disabled {
    opacity: 0.6;
    filter: saturate(60%);
  }
`;

export const ButtonTwo = styled(ButtonBase)`
  background: #4661e6;
  &:hover:not(:disabled),
  &:disabled:not(:disabled),
  &:focus {
    background: #7c91f9;
    transform: translateX(0rem) translateY(-0.125rem);
  }
  &:active:not(:disabled) {
    transform: translateX(0rem) translateY(0.125rem);
  }

  &:disabled {
    opacity: 0.6;
    filter: saturate(60%);
  }
`;

export const ButtonThree = styled(ButtonBase)`
  background: #3a4374;
  &:hover:not(:disabled),
  &:disabled:not(:disabled),
  &:focus {
    background: #656ea3;
    transform: translateX(0rem) translateY(-0.125rem);
  }
  &:active:not(:disabled) {
    background: #656ea3;
    transform: translateX(0rem) translateY(0.125rem);
  }

  &:disabled {
    opacity: 0.6;
    filter: saturate(60%);
  }
`;

export const ButtonError = styled(ButtonBase)`
  background: #d73737;
  &:hover:not(:disabled),
  &:disabled:not(:disabled),
  &:focus {
    background: #e98888;
    transform: translateX(0rem) translateY(-0.125rem);
  }
  &:active:not(:disabled) {
    transform: translateX(0rem) translateY(0.125rem);
  }
  &:disabled {
    opacity: 0.6;
    filter: saturate(60%);
  }
`;
