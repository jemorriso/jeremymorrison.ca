import styled from 'styled-components';
import Link from 'next/link';
import { navLinks } from '@config';
import { Menu } from '@components';

const StyledHeader = styled.header`
  position: fixed;
  top: 0px;
  /* z-index: 11; */
  padding: 0px 50px;
  width: 100%;
  height: 70px;
  background: purple;
  ${({ theme }) => theme.mixins.flexBetween};

  @media (max-width: 1080px) {
    padding: 0 40px;
  }
  @media (max-width: 768px) {
    padding: 0 25px;
  }
`;

const StyledNav = styled.nav`
  ${({ theme }) => theme.mixins.flexBetween};
  /* width 100% required here because parent container is flexbox. */
  width: 100%;
  background: orange;
  /* z-index: 12; */
  /* height: 100%; */

  @media (max-width: 768px) {
    display: none;
  }

  ol {
    ${({ theme }) => theme.mixins.flexBetween};
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      margin: 0 5px;
      position: relative;
    }
  }
`;

const StyledLinks = styled.div`
  /* display: flex;
  align-items: center; */

  @media (max-width: 768px) {
    display: none;
  }
`;

const Nav = () => {
  return (
    <StyledHeader>
      <StyledNav>
        <div>Jeremy Morrison</div>
        <StyledLinks>
          <ol>
            {navLinks.map(({ url, name }, i) => (
              <li key={i}>
                <Link href={url}>{name}</Link>
              </li>
            ))}
          </ol>
        </StyledLinks>
      </StyledNav>
      <Menu />
    </StyledHeader>
  );
};

export default Nav;
