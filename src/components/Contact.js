import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SectionHeader from './SectionHeader';
import Socials from './Socials';

const Wrapper = styled.section`
  height: 100%;
`;

const FlexWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  /* justify-content: flex-start; */
  justify-content: flex-end;
`;

function Contact(props) {
  const { socials } = props;
  return (
    <Wrapper>
      <SectionHeader title="Contact" />
      <Socials socials={socials} fontSize="11rem" />
    </Wrapper>
  );
}

Contact.propTypes = {
  socials: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Contact;
