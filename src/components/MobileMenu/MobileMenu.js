/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { COLORS, QUERIES, WEIGHTS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content>
        <CloseButton>
          <UnstyledButton onClick={onDismiss}>
            <VisuallyHidden>Dismiss menu</VisuallyHidden>
            <Icon id="close"/>
          </UnstyledButton>
        </CloseButton>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  display: flex;
  justify-content: flex-end;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: hsla(0deg, 0%, 0%, 0.5);

`;

const Content = styled(DialogContent)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width:min(250px, 90%);
  right: 0;
  padding: 10px 4px 32px 32px;
  background: white;
`

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`
const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};
  transition: color 0.5s;

  &:hover {
    color: ${COLORS.secondary};
  }
`;
const CloseButton = styled.div`
  align-self: flex-end;
  padding: 12px;
`

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const FooterLink = styled.a`
  color: ${COLORS.gray[700]};
  text-decoration: none;

  &:hover {
    color: ${COLORS.secondary}
  }
`

export default MobileMenu;
