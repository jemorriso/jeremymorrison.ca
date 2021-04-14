import styled from 'styled-components';

const StyledSection = styled.section`
  padding-top: 100px;
  & h2 {
    margin-bottom: 40px;
  }
`;
const Section = ({ children }) => {
  return (
    <StyledSection id="about">
      <hr />
      {children}
    </StyledSection>
  );
};

export default Section;
