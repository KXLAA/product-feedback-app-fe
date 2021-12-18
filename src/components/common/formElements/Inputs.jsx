/* eslint-disable import/no-named-as-default */
import styled from 'styled-components';
import device from '../MediaQueries';

export const Form = styled.form`
  background: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 24px;
  border-radius: 10px;
  padding: 42px;

  @media ${device.mobile} {
    padding: 24px;
  }

  h1 {
    color: #3a4374;
    padding-bottom: 26px;
    padding-top: 16px;
  }

  svg {
    position: absolute;
    top: 55px;
  }
`;

export const InputContainer = styled.div`
  div {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding-bottom: 16px;

    h4 {
      color: #3a4374;
    }

    p {
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: #647196;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 13px 24px;
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  color: #3a4374;
  background: #f7f8fd;
  border-radius: 5px;
  border: none;
`;

export const Textarea = styled.textarea`
  width: 100%;
  resize: none;
  border: none;
  overflow: auto;
  outline: none;
  background: #f7f8fd;
  border-radius: 5px;
  height: 96px;
  padding: 24px;
  font-size: 15px;
  line-height: 22px;
  color: #8c92b3;
  margin-bottom: 24px;

  @media ${device.mobile} {
    height: 120px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 16px;
  align-self: flex-end;

  @media ${device.mobile} {
    flex-direction: column;
    align-self: center;
    width: 100%;
  }
`;
