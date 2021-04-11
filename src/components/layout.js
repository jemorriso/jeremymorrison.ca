import styled from 'styled-components';
import { Nav } from '@components';

const StyledContent = styled.div`
  background: #a79aff;
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
