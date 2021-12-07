import React from 'react';
import styled from 'styled-components';
import FilterBtn from '../common/ui/FilterBtn';

const MianContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
const Header = styled.header`
  height: 137px;
  display: flex;
  position: relative;
  align-items: flex-end;
`;

const HeaderImg = styled.img`
  position: absolute;
  border-radius: 10px;
  z-index: -1;
`;

const HeaderTxt = styled.div`
  width: 100%;
  padding: 24px;

  h2 {
    color: #ffffff;
  }

  p {
    color: #ffffff;
    mix-blend-mode: normal;
    opacity: 0.75;
    font-weight: 500;
    font-size: 15px;
    line-height: 22px;
  }
`;

const Filter = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 24px;
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;

const RoadMap = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 24px;
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

const SideBar = () => (
  <MianContainer>
    <Header>
      <HeaderImg src="/background-header.png" alt="header-background" />
      <HeaderTxt>
        <h2>Frontend Mentor</h2>
        <p>Feedback Board</p>
      </HeaderTxt>
    </Header>

    <Filter>
      <FilterBtn text="All" />
      <FilterBtn text="UI" />
      <FilterBtn text="UI" />
      <FilterBtn text="Enhancement" />
      <FilterBtn text="Bug" />
      <FilterBtn text="Feature" />
    </Filter>

    <RoadMap>
      <RoadMapHeader>
        <h3>Roadmap</h3>
        <a href="/">View</a>
      </RoadMapHeader>
      <RoadMapContent>
        <RoadMapTxt>
          <div>
            <BulletPoint color="#F49F85" />
            <p>Planned</p>
          </div>
          <p style={{ fontWeight: 700 }}>2</p>
        </RoadMapTxt>
        <RoadMapTxt>
          <div>
            <BulletPoint color="#AD1FEA" />
            <p>In-Progress</p>
          </div>
          <p style={{ fontWeight: 700 }}>3</p>
        </RoadMapTxt>
        <RoadMapTxt>
          <div>
            <BulletPoint color="#62BCFA" />
            <p>In-Progress</p>
          </div>
          <p style={{ fontWeight: 700 }}>1</p>
        </RoadMapTxt>
      </RoadMapContent>
    </RoadMap>
  </MianContainer>
);

export default SideBar;
