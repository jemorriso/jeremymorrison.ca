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
  background-color: white;
  margin: 2rem auto;
  border-radius: 20px;
  padding: 3.5rem 0;
  color: black;
`;

const Video = styled.video`
  width: 95%;
  /* margin-top: 1em; */
  margin: 3.5rem auto;
  /* element must have display set to 'block' for margin auto to work */
  display: block;
  border-radius: 10px;
`;

const Img = styled.img`
  width: 95%;
  /* margin-top: 1em; */
  margin: 3.5rem auto;
  /* element must have display set to 'block' for margin auto to work */
  display: block;
  border-radius: 10px;
`;

const P = styled.p`
  width: 90%;
  margin: auto;
  font-size: 1.6rem;

  & + & {
    margin-top: 1rem;
  }
`;

const H1 = styled.h1`
  font-size: 2.4rem;
  font-weight: bold;
  margin-left: 5%;
  margin-top: 3.5rem;
  margin-bottom: 1.5rem;
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
        <P>
          ‘In It To Winnik’ is the name of a long-running fantasy hockey league
          created by my friends and I (named after eminent NHLer Daniel Winnik).
          While it is easy to find graphical representations of NHL player data
          and NHL team data on the web, I had the idea of creating graphs that
          displayed information about the fantasy teams in the league, which is
          something that is not offered by Yahoo (which hosts the fantasy
          league). This would allow players to quickly compare their team vs.
          other teams in order to find value.
        </P>
        <H1>Implentation Overview</H1>
        <P>
          A MySQL database is hosted in the cloud, which stores all the player
          and team data. Python scripts are utilized in order to pull data from
          NHL.com’s API, and Yahoo Fantasy’s API, and insert the relevant
          information into the MySQL database. I used Node.js and Express to
          create a server that is hosted on Heroku. The graph is created using
          the popular Chart.js library. I used the JavaScript fetch API to
          retrieve data from the server in order to update the graph without
          refreshing the page.
        </P>
        <H1>Features</H1>
        <P>
          To explain the motivation behind the graph format and parameters, it
          is necessary to understand a small amount about how fantasy sports
          works. In general, a fantasy NHL team is composed of real NHL players,
          that collect stats in each real game they play. The stats that they
          tally are added to the points of the fantasy team that roster the
          player.
        </P>
        <Video controls loop muted playsinline src={allTeams} />
        <P>
          The graphs in the video show the cumulative tally for selected scoring
          categories for each team, with the default date range being the
          duration of the season.
        </P>
        <P>
          For the curious, our league is set up in a ‘head to head’ format,
          which means that each week two fantasy teams face off against one
          another. At the end of the week, the team with the higher point total
          wins the matchup, and the process is repeated for the next week, each
          team facing different opponents. Since that’s too easy, points are
          awarded for each individual scoring category that the league tracks,
          so there is a winner and a loser for each category, for each head to
          head matchup.
        </P>
        <P>
          For example, suppose fantasy team A selected Elias Pettersson, who
          plays on the Vancouver Canucks, while team B selected Auston Matthews,
          who plays with the Toronto Maple Leafs, and that the Canucks are
          playing the Leafs tonight. Suppose that Pettersson scores one goal on
          one shot, while Matthews does not tally any stats. If shots on goal
          and goals are the only two categories that are being tracked in the
          league, and the matchup ended after this game, then team A would win
          the matchup 2-0.
        </P>
        <P>
          So, if team A is playing team C this week, they need to beat team C
          among as many scoring categories as possible in order to win the
          matchup. Thus, it is useful to know how much team C is expected to
          score across the different categories, so that team A can set their
          starting lineup (by subbing players off their bench) in response to
          what team C is expected to score. This is where the graph comes in.
        </P>
        <Video controls loop muted playsinline src={matchup} />
        <P>
          The rolling average option calculates the team average +/- 3 days
          (i.e. a 7-day window). In this situation, it is obvious that team A
          has players that collect more hits than team B. So if team A is facing
          team B next week, they now know that they have a significant hits
          buffer with which to work. It looks like team A and team B are
          competitive on powerplay assists. In order to win both categories,
          team A should sub out a player that is a proficient hitter, for one
          that is likely to tally a number of powerplay assists.
        </P>
        <P>This, in essence, is the utility of the application.</P>
        <Video controls loop muted playsinline src={selectTeams} />
        <Video controls loop muted playsinline src={rollingAverageCalendar} />
        <H1>Challenges</H1>
        <P>
          Database structure was the first challenge, as I needed to figure out
          what data I wanted to collect from NHL.com’s and Yahoo’s APIs, and put
          them into a database in a coherent and logical manner, with minimal
          data duplication. This resulted in 11 different tables relating both
          NHL and fantasy teams, matchups, players, fantasy rosters, player
          statistics for every player for every game, and player attributes.
        </P>
        <Img src={ERdiagram} alt="Entity Relationship Diagram" />
      </ContentWrapper>
    </section>
  );
}

InItToWinnik.propTypes = {
  smallDeviceBreakpoint: PropTypes.number.isRequired,
};

export default InItToWinnik;
