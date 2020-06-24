import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SectionHeader from './SectionHeader';
import Socials from './Socials';

const Wrapper = styled.section``;

function Contact(props) {
  const { socials } = props;
  return (
    <Wrapper>
      <SectionHeader title="Contact" />
      <Socials socials={socials} />
    </Wrapper>
  );
}

Contact.propTypes = {
  socials: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default Contact;
