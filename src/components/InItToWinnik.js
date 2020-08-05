import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Zoom from 'react-medium-image-zoom';
import SectionHeader from './SectionHeader';

import 'react-medium-image-zoom/dist/styles.css';

import allTeams from '../assets/inItToWinnik/allTeams.mp4';
import selectTeams from '../assets/inItToWinnik/selectTeams.mp4';
import rollingAverageCalendar from '../assets/inItToWinnik/rollingAverageCalendar.mp4';
import matchup from '../assets/inItToWinnik/matchup.mp4';
import ERdiagram from '../assets/inItToWinnik/ERdiagram.png';

const Video = styled.video`
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
      <Carousel>
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
          <img src={ERdiagram} alt="Entity Relationship Diagram" />
        </Zoom>
      </Carousel>
    </section>
  );
}

InItToWinnik.propTypes = {
  smallDeviceBreakpoint: PropTypes.number.isRequired,
};

export default InItToWinnik;
