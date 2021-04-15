import styled from 'styled-components';
import { Section, Project } from '@components';
import { sortRankDate } from '@utils';

const StyledProjectsSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, 550px);
  /* grid-auto-rows: 450px; */
  justify-content: space-evenly;
`;

const Projects = ({ projects }) => {
  projects = sortRankDate(projects);
  return (
    <Section id="projects">
      <h2>Projects</h2>
      <StyledProjectsSection>
        {projects.map((p, i) => (
          <Project matter={p.frontMatter} content={p.hydrated} key={i} />
        ))}
      </StyledProjectsSection>
    </Section>
  );
};

export default Projects;
