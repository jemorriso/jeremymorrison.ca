import styled from 'styled-components';
import hydrate from 'next-mdx-remote/hydrate';

import { Layout, Hero, About, Jobs, Projects, Contact } from '@components';
import { getMDX, getFilesByGroup } from 'src/lib/mdx';

const arrayHydrate = (markdown) => {
  for (const m of markdown) {
    m.hydrated = hydrate(m.mdxSource);
  }
  return markdown;
};

const StyledMainContainer = styled.main`
  margin: 0 auto;
  width: 100%;
  max-width: 1100px;
  min-height: 100vh;
`;

const StyledSectionsContainer = styled.div`
  & > * {
    /* padding-top: 100px; */
    /* margin-bottom: 50px; */
  }
  & > *:last-child {
    margin-bottom: 0;
  }
`;

export default function Home({ about, hero, jobs, projects }) {
  const aboutContent = hydrate(about.mdxSource);
  const heroContent = hydrate(hero.mdxSource);
  const hydratedJobs = arrayHydrate(jobs);
  const hydratedProjects = arrayHydrate(projects);

  return (
    <Layout>
      <StyledMainContainer>
        <Hero content={heroContent} />
        <StyledSectionsContainer>
          <About content={aboutContent} />
          <Jobs jobs={hydratedJobs} />
          <Projects projects={hydratedProjects} />
          <Contact />
        </StyledSectionsContainer>
      </StyledMainContainer>
    </Layout>
  );
}

export async function getStaticProps() {
  const [about, hero, jobs, projects] = await Promise.all([
    getMDX('sections', 'about.mdx'),
    getMDX('sections', 'hero.mdx'),
    getFilesByGroup('jobs'),
    getFilesByGroup('projects'),
  ]);
  return {
    props: {
      about,
      hero,
      jobs,
      projects,
    },
  };
}
