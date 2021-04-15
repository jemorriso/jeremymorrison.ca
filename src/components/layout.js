import styled from 'styled-components';
import { Nav } from '@components';

const StyledContent = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = ({ children }) => {
  return (
    <StyledContent>
      <Nav />
      <div id="content">{children}</div>
    </StyledContent>
  );
};

export default Layout;
