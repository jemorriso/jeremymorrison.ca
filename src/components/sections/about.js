import styled from 'styled-components';
import { Section } from '@components';

const StyledAboutSection = styled.section`
  /* margin: auto; */
  padding: 0 50px;
`;

const About = ({ content }) => {
  return (
    <Section id="about">
      <h2>About</h2>
      <StyledAboutSection>{content}</StyledAboutSection>
    </Section>
  );
};

export default About;
