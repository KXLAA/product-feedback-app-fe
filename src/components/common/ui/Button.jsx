import styled from 'styled-components';

export const Button = styled.button`
  display: inline;
  padding: 12px 24px;
  background: #ad1fea;
  border-radius: 10px;
  transition: all 0.3s ease;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #f2f4fe;
  cursor: pointer;
  border: none;

  &:hover:not(:disabled),
  &:disabled:not(:disabled),
  &:focus {
    color: #ffffff;
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

export const ButtonAlt = styled(Button)`
  &:hover:not(:disabled),
  &:disabled:not(:disabled),
  &:focus {
    color: #ffffff;
    background: #4661e6;
    transform: translateX(0rem) translateY(-0.125rem);
  }
  &:active:not(:disabled) {
    color: #ffffff;
    background: #4661e6;
    transform: translateX(0rem) translateY(0.125rem);
  }

  &:disabled {
    opacity: 0.6;
    filter: saturate(60%);
  }
`;
