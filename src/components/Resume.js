import React from 'react';
import styled from 'styled-components';
import SectionHeader from './SectionHeader';

function Resume(props) {
  return (
    <section>
      <SectionHeader title="Resume" />
      <a href="/docs/JeremyMorrisonResume.pdf">Resume</a>
    </section>
  );
}

export default Resume;
