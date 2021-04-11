import styled from 'styled-components';

const StyledMenu = styled.div`
  display: none;

  @media (max-width: var(--tabletL)) {
    display: block;
  }
`;

const Menu = () => {
  return <StyledMenu></StyledMenu>;
};

export default Menu;
