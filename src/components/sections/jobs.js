import styled from 'styled-components';
import { Section, Project } from '@components';
import { sortRankDate } from '@utils';

const StyledFreelanceJobs = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, 550px);
  /* grid-auto-rows: 550px; */
  justify-content: space-evenly;
`;

const StyledFormalJobs = styled.section``;

const Jobs = ({ jobs }) => {
  jobs = sortRankDate(jobs);
  const formalJobs = jobs.slice(0, 1);
  const freelanceJobs = jobs.slice(1);
  return (
    <Section id="jobs">
      <h2>Experience</h2>
      <StyledFormalJobs>
        {formalJobs.map((p, i) => (
          <Project matter={p.frontMatter} content={p.hydrated} key={i} />
        ))}
      </StyledFormalJobs>
      <h3 className="subtitle">Freelance Jobs</h3>
      <StyledFreelanceJobs>
        {freelanceJobs.map((p, i) => (
          <Project matter={p.frontMatter} content={p.hydrated} key={i} />
        ))}
      </StyledFreelanceJobs>
    </Section>
  );
};

export default Jobs;
