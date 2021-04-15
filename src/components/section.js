import styled from 'styled-components';

const StyledSection = styled.section`
  padding-top: 70px;
  margin: auto;
  & h2 {
    margin-left: 50px;
    font-size: 2em;
  }

  & .subtitle {
    margin-top: 50px;
    margin-left: 60px;
    font-size: 1.5em;
  }
`;

const Section = ({ id, children }) => {
  return (
    <StyledSection id={id}>
      <hr />
      {children}
    </StyledSection>
  );
};

export default Section;
