import React from 'react';
import styled from 'styled-components/macro';

import { QUERY } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import NavLink from '../NavLink';
import MobileMenu from '../MobileMenu';
import VisuallyHidden from '../VisuallyHidden';
import Icon from '../Icon';
import UnstyledButton from '../UnstyledButton';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <DesktopNav>
          <NavLink path="/sale" title="Sale" />
          <NavLink path="/new" title="New&nbsp;Releases" />
          <NavLink path="/men" title="Men" />
          <NavLink path="/women" title="Women" />
          <NavLink path="/kids" title="Kids" />
          <NavLink path="/collections" title="Collections" />
        </DesktopNav>

        <SmallScreenNav>
          <UnstyledButton href="/cart">
            <VisuallyHidden>Cart</VisuallyHidden>
            <Icon id="shopping-bag"/>
          </UnstyledButton>
          <UnstyledButton href="/search">
            <VisuallyHidden>Search</VisuallyHidden>
            <Icon id="search"/>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <VisuallyHidden>Menu</VisuallyHidden>
            <Icon id="menu"/>
          </UnstyledButton>
        </SmallScreenNav>

        <Spacer />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow: auto;

  @media(${QUERY.tabletAndSmaller}) {
    justify-content: space-between;
    border-top: 4px solid var(--color-gray-900);
    padding-left: 16px;
    padding-right: 16px;
    align-items: center;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(1rem, 7.5vw - 3.5rem, 3rem);
  margin: 0px 48px;

  @media(${QUERY.tabletAndSmaller}) {
    display: none;
  }
`;

const SmallScreenNav = styled.nav`
  display: none;
  @media(${QUERY.tabletAndSmaller}) {
    display: flex;
    gap: 32px;
  }
  @media(${QUERY.mobileAndSmaller}) {
    gap: 16px;
  }
`

const LogoWrapper = styled.div`
  flex: 1;
  @media(${QUERY.tabletAndSmaller}){
    flex: revert;
  }
`;

const Spacer = styled.div`
  flex: 1;
  @media(${QUERY.tabletAndSmaller}){
    display: none;
  }
`

export default Header;