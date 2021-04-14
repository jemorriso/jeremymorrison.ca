import styled from 'styled-components';
import hydrate from 'next-mdx-remote/hydrate';

import { Layout, Hero, About, Jobs, Projects, Contact } from '@components';
import { getMDX, getFilesByGroup } from 'src/lib/mdx';
import { zip } from 'src/lib/utils';

const zipHydrate = (markdown) => {
  const zipped = zip(
    markdown.map((m) => m.frontMatter),
    markdown.map((m) => hydrate(m.mdxSource))
  );
  return zipped;
};

const StyledMainContainer = styled.main`
  margin: 0 auto;
  width: 100%;
  max-width: 1100px;
  min-height: 100vh;
  padding: 0 200px;

  @media (max-width: var(--desktopS)) {
    padding: 0 100px;
  }
  @media (max-width: var(--tabletL)) {
    padding: 0 50px;
  }
  @media (max-width: var(--mobileL)) {
    padding: 0 25px;
  }
`;

const StyledSectionsContainer = styled.div`
  & > * {
    /* padding-top: 100px; */
    margin-bottom: 100px;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
`;

export default function Home({ about, hero, jobs, projects }) {
  const aboutContent = hydrate(about.mdxSource);
  const heroContent = hydrate(hero.mdxSource);
  const zippedJobs = zipHydrate(jobs);
  const zippedProjects = zipHydrate(projects);

  return (
    <Layout>
      <StyledMainContainer>
        <Hero content={heroContent} />
        <StyledSectionsContainer>
          <About content={aboutContent} />
          {/* <Jobs jobs={zippedJobs} /> */}
          <Projects projects={zippedProjects} />
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
