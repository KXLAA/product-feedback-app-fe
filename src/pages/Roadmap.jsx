import React from 'react';
import MainLayout from '../components/common/Layout';
import { PageGrid, ItemContainer } from '../components/roadmap/Layout';
import Planned from '../components/roadmap/planned/Planned';
import InProgress from '../components/roadmap/inProgress/InProgress';
import Live from '../components/roadmap/live/Live';
import Header from '../components/roadmap/Header';

const Roadmap = () => (
  <MainLayout>
    <Header />
    <PageGrid>
      <ItemContainer>
        <Planned />
      </ItemContainer>

      <ItemContainer>
        <InProgress />
      </ItemContainer>

      <ItemContainer>
        <Live />
      </ItemContainer>
    </PageGrid>
  </MainLayout>
);

export default Roadmap;
