import styled from 'styled-components';
import { FaComment } from 'react-icons/fa';

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 8px;
  h3 {
    color: #3a4374;
    padding-bottom: 4px;
  }

  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    color: #647196;
  }
`;

export const Container = styled.div`
  width: 100%;
  padding: 30px;
  background: #ffffff;
  border-radius: 5px;
`;

export const BulletPoint = styled.div`
  height: 8px;
  width: 8px;
  border-radius: 100%;
  background-color: ${(props) => props.color || 'palevioletred'};
`;
export const RoadMapTxt = styled.div`
  padding-bottom: 8px;
  p {
    padding: 2px;
    font-size: 16px;
    line-height: 23px;
    color: #647196;
  }

  div {
    display: flex;
    align-items: center;
    gap: 24px;
  }
`;

export const Content = styled.div`
  padding-bottom: 16px;

  h3 {
    color: #3a4374;
    padding-bottom: 4px;
  }

  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    color: #647196;
  }
`;

export const FilterContainer = styled.div`
  padding-bottom: 16px;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Comment = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  p {
    font-weight: 700;
    font-size: 16px;
    line-height: 23px;
    text-align: center;
    letter-spacing: -0.222222px;
    color: #3a4374;
  }
`;

export const CommentIcon = styled(FaComment)`
  cursor: pointer;
  color: #cdd2ee;
`;
