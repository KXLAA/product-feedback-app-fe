/* eslint-disable react/prop-types */
/* eslint-disable import/no-named-as-default */
/* eslint-disable react/prop-types */
import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import device from '../../common/MediaQueries';

const Container = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 24px;

  @media ${device.tablet} {
    flex: 1;
  }
`;

const RoadMapHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 24px;

  h3 {
    color: #3a4374;
  }

  a {
    font-weight: 600;
    font-size: 13px;
    line-height: 19px;
    text-decoration-line: underline;
    color: #4661e6;
  }
`;

const RoadMapContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const BulletPoint = styled.div`
  height: 8px;
  width: 8px;
  border-radius: 100%;
  background-color: ${(props) => props.color || 'palevioletred'};
`;
const RoadMapTxt = styled.div`
  display: flex;
  justify-content: space-between;

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

const RoadMap = ({ feedback }) => {
  const planned = feedback?.filter((feed) => feed?.status === 'planned');
  const live = feedback?.filter((feed) => feed?.status === 'live');
  const inProgress = feedback?.filter((feed) => feed?.status === 'in-progress');

  return (
    <Container>
      <RoadMapHeader>
        <h3>Roadmap</h3>
        <Link to="/roadmap">View</Link>
      </RoadMapHeader>
      <RoadMapContent>
        <RoadMapTxt>
          <div>
            <BulletPoint color="#F49F85" />
            <p>Planned</p>
          </div>
          <p style={{ fontWeight: 700 }}>{planned?.length}</p>
        </RoadMapTxt>
        <RoadMapTxt>
          <div>
            <BulletPoint color="#AD1FEA" />
            <p>In-Progress</p>
          </div>
          <p style={{ fontWeight: 700 }}>{inProgress?.length}</p>
        </RoadMapTxt>
        <RoadMapTxt>
          <div>
            <BulletPoint color="#62BCFA" />
            <p>Live</p>
          </div>
          <p style={{ fontWeight: 700 }}>{live?.length}</p>
        </RoadMapTxt>
      </RoadMapContent>
    </Container>
  );
};

export default RoadMap;

RoadMap.propTypes = {
  feedback: PropTypes.arrayOf(PropTypes.object).isRequired,
};
