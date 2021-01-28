import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Heading from '../../atoms/Heading/Heading';
import Paragraph from '../../atoms/Paragraph/Paragraph';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  padding: 2rem;
  border-radius: 2rem;
  box-shadow: 0 4px 0.75rem rgba(0, 0, 0, .2);
  background-image: linear-gradient(-20deg, #00cdac 0%, #8ddad5 100%);
  width: 100%;
  height: 100%;
`;

const StyledParagraph = styled(Paragraph)`
  font-family: 'Teko', sans-serif;
`;

const SkillsCard = ({ skills }) => (
  <Wrapper>
    <Heading big>Skills:</Heading>
    <ul>
      {skills.map((i) => (
        <li>
          <StyledParagraph big>{i}</StyledParagraph>
        </li>
      ))}
    </ul>
  </Wrapper>
);

SkillsCard.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SkillsCard;
