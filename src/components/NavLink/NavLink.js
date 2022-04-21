import React from 'react';
import styled from 'styled-components/macro';

const NavLink = ({
  path,
  title
}) => {
  return (
    <SwipeLink href={path}>
      <span data-title={title}>
        {title}
      </span>
    </SwipeLink>
  );
};


const RollLink = styled.a`
  display: inline-block;
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: var(--font-weight-medium);
  overflow: hidden;
  perspective: 600px;
  perspective-origin: 50% 50%;
  & span {
    display: block;
    position: relative;
    font-weight: normal;
    transition: all 200ms;
    transform-origin: 50% 0;
    transform-style: preserve-3d;
  }
  &:hover span {
    transform: translate3d( 0px, 0px, -30px ) rotateX( 91deg );
  }
  & span:after {
    content: attr(data-title);
    display: block;
    position: absolute;
    font-weight: 700;
    left: 0;
    top: 0;
    transform-origin: 50% 0%;
    transform: translate3d( 0px, 105%, 0px ) rotateX( -90deg );
}
`;

const SwipeLink = styled.a`
  display: inline-block;
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: var(--font-weight-medium);
  overflow: hidden;
  & span {
    display: block;
    position: relative;
    font-weight: normal;
    transition: all 200ms
  }
  &:hover span {
    transform: translateY(-30px );
  }
  & span:after {
    content: attr(data-title);
    display: block;
    position: absolute;
    font-weight: 700;
    left: 0;
    top: 0;
    transform: translateY(30px);
  }
}
`;

export default NavLink;
