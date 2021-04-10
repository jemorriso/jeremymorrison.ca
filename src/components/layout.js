import styled from 'styled-components';

const StyledContent = styled.div`
  // display: flex;
  background: #a79aff;
  min-height: 100vh;
`;

const Layout = ({ children }) => {
  return (
    <StyledContent>
      <div id="content">{children}</div>
    </StyledContent>
  );
};

export default Layout;
