import React from 'react';
import styled from 'styled-components';

import SectionHeader from './SectionHeader';
import Socials from './Socials';

function Resume(props) {
  const resumeSocials = [
    {
      href: './docs/JeremyMorrisonResume.pdf',
      icon: ['fas', 'file'],
    },
  ];
  return (
    <section>
      <SectionHeader title="Resume" />
      <Socials socials={resumeSocials} fontSize="4.8rem" />
    </section>
  );
}

export default Resume;
