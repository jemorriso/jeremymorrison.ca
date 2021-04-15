import styled from 'styled-components';
import Link from 'next/link';
import { navLinks } from '@config';
import { Menu } from '@components';

const StyledHeader = styled.header`
  position: fixed;
  top: 0px;
  z-index: 11;
  padding: 0px 50px;
  width: 100%;
  height: 70px;
  background: ${({ theme }) => theme.body};
  font-weight: 600;
  font-size: var(--font-size-xl);
  box-shadow: 0 10px 30px -10px ${({ theme }) => theme.shadow};
  /* text-transform: uppercase; */

  ${({ theme }) => theme.mixins.flexBetween}

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

  @media (max-width: 768px) {
    display: none;
  }

  ul {
    ${({ theme }) => theme.mixins.flexBetween};
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      margin: 0 10px;
      position: relative;
    }
  }

  button {
    margin-left: 15px;
  }

  .logo {
    cursor: pointer;
  }
`;

const StyledLinks = styled.div`
  ${({ theme }) => theme.mixins.flexBetween};
`;

const Nav = () => {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
  return (
    <StyledHeader>
      <StyledNav>
        <div className="logo" onClick={scrollToTop}>
          Jeremy Morrison
        </div>
        <StyledLinks>
          <ul>
            {navLinks.map(({ url, name }, i) => (
              <li key={i}>
                <Link href={url}>{name}</Link>
              </li>
            ))}
          </ul>
          <button>
            <a href="/resume.pdf" target="_blank">
              Resume
            </a>
          </button>
        </StyledLinks>
      </StyledNav>
      <Menu />
    </StyledHeader>
  );
};

export default Nav;
