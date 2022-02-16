import React from 'react';
import styled from 'styled-components/macro';

import { QUERY, WEIGHTS } from '../../constants';

import Breadcrumbs from '../Breadcrumbs';
import Select from '../Select';
import Spacer from '../Spacer';
import ShoeSidebar from '../ShoeSidebar';
import ShoeGrid from '../ShoeGrid';

const ShoeIndex = ({ sortId, setSortId }) => {
  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <Title>Running</Title>
          <SortWrapper>
            <Select
              label="Sort"
              value={sortId}
              onChange={(ev) => setSortId(ev.target.value)}
            >
              <option value="newest">Newest Releases</option>
              <option value="price">Price</option>
            </Select>
          </SortWrapper>
        </Header>
        <Spacer size={32} />
        <ShoeGrid />
      </MainColumn>
      <PageNav>
        <Breadcrumbs>
          <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale/shoes">
            Shoes
          </Breadcrumbs.Crumb>
        </Breadcrumbs>
        <Sidebar>
          <Spacer size={42} />
          <ShoeSidebar />
        </Sidebar>
      </PageNav>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
  gap: 32px;

  @media(${QUERY.tabletAndSmaller}) {
    flex-direction: column-reverse;
    gap: 8px;
  }
`;

const PageNav = styled.div`
  flex-basis: 248px;

  @media(${QUERY.tabletAndSmaller}) {
    flex-basis: revert;
  }
  `;

const Sidebar = styled.div`
  @media(${QUERY.tabletAndSmaller}) {
    display: none;
  }

`

const MainColumn = styled.div`
  flex: 1;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
`;

const SortWrapper = styled.div`
  @media(${QUERY.mobileAndSmaller}){
    display: none;
  }
`
export default ShoeIndex;
