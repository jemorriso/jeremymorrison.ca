import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import Zoom from 'react-medium-image-zoom';
import SectionHeader from './SectionHeader';

import 'react-medium-image-zoom/dist/styles.css';

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
        <Zoom>
          <Video autoPlay loop muted playsinline src={allTeams} />
        </Zoom>
        <Zoom>
          <Video autoPlay loop muted playsinline src={selectTeams} />
        </Zoom>
        <Zoom>
          <Video autoPlay loop muted playsinline src={rollingAverageCalendar} />
        </Zoom>
        <Zoom>
          <Video autoPlay loop muted playsinline src={matchup} />
        </Zoom>
        <Zoom>
          <Img src={ERdiagram} alt="Entity Relationship Diagram" />
        </Zoom>
      </ContentWrapper>
    </section>
  );
}

InItToWinnik.propTypes = {
  smallDeviceBreakpoint: PropTypes.number.isRequired,
};

export default InItToWinnik;
