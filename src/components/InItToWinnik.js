import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SectionHeader from './SectionHeader';

import allTeams from '../assets/inItToWinnik/allTeams.mp4';
import selectTeams from '../assets/inItToWinnik/selectTeams.mp4';
import rollingAverageCalendar from '../assets/inItToWinnik/rollingAverageCalendar.mp4';
import matchup from '../assets/inItToWinnik/matchup.mp4';
import ERdiagram from '../assets/inItToWinnik/ERdiagram.png';

const ContentWrapper = styled.div`
  /* width based on number of characters for readability */
  width: 80ch;
  max-width: 100%;
  margin: auto;
`;

const Video = styled.video`
  width: 100%;
`;

const Img = styled.img`
  width: 100%;
`;

function InItToWinnik(props) {
  const { smallDeviceBreakpoint } = props;
  return (
    <section>
      <SectionHeader
        title="In It To Winnik"
        smallDeviceBreakpoint={smallDeviceBreakpoint}
      />
      <ContentWrapper>
        <Video autoPlay loop muted playsinline src={allTeams} />
        <Video autoPlay loop muted playsinline src={selectTeams} />
        <Video autoPlay loop muted playsinline src={rollingAverageCalendar} />
        <Video autoPlay loop muted playsinline src={matchup} />
        <Img src={ERdiagram} alt="Entity Relationship Diagram" />
      </ContentWrapper>
    </section>
  );
}

InItToWinnik.propTypes = {
  smallDeviceBreakpoint: PropTypes.number.isRequired,
};

export default InItToWinnik;
