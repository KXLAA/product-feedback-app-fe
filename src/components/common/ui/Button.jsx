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

  &:hover {
    color: #ffffff;
    background: #c75af6;
    transform: translateX(0rem) translateY(-0.125rem);
  }
  &:active {
    transform: translateX(0rem) translateY(0.125rem);
  }
`;

export const ButtonAlt = styled(Button)`
  &:hover {
    color: #ffffff;
    background: #4661e6;
    transform: translateX(0rem) translateY(-0.125rem);
  }
  &:active {
    color: #ffffff;
    background: #4661e6;
    transform: translateX(0rem) translateY(0.125rem);
  }
`;
