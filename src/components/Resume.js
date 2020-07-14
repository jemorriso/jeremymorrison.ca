import React from 'react';
import styled from 'styled-components';
import SectionHeader from './SectionHeader';
import Socials from './Socials';

const Wrapper = styled.section`
  height: 100%;
`;

function Resume(props) {
  const resumeSocials = [
    {
      href: './docs/JeremyMorrisonResume.pdf',
      icon: ['fas', 'file'],
    },
  ];
  return (
    <Wrapper>
      <SectionHeader title="Resume" />
      <Socials socials={resumeSocials} fontSize="11rem" />
    </Wrapper>
  );
}

export default Resume;
