import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SectionHeader from './SectionHeader';
import Socials from './Socials';

const Wrapper = styled.section`
  height: 100%;
`;

function Resume(props) {
  const { smallDeviceBreakpoint } = props;
  const resumeSocials = [
    {
      href: './docs/JeremyMorrisonResume.pdf',
      icon: ['fas', 'file'],
    },
  ];
  return (
    <Wrapper>
      <SectionHeader
        title="Resume"
        smallDeviceBreakpoint={smallDeviceBreakpoint}
      />
      <Socials socials={resumeSocials} fontSize="11rem" />
    </Wrapper>
  );
}

Resume.propTypes = {
  smallDeviceBreakpoint: PropTypes.number.isRequired,
};
export default Resume;
