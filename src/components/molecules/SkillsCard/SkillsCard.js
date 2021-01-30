import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Heading from '../../atoms/Heading/Heading';
import Paragraph from '../../atoms/Paragraph/Paragraph';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  z-index: 3;
  
  padding: 2rem;
  border-radius: 2rem;
  box-shadow: 0 4px 0.75rem rgba(0, 0, 0, .2);
  width: 100%;
  height: 100%;
  min-height: 34rem;

  ::after {
    top: 1rem;
    left: 1rem;
    position: absolute;
    height: calc(100% - 2rem);
    width: calc(100% - 2rem);
    display: block;
    content: '';
    border-radius: 1.5rem;
    z-index: -1;

    background: ${({ theme }) => theme.background}
  }
  
  ::before {
    top: 0;
    left: 0;
    position: absolute;
    height: 100%;
    width: 100%;
    display: block;
    content: '';
    z-index: -2;

    background: repeating-linear-gradient(
            45deg,
            #f9d423,
            #f9d423 10px,
            #1a212f 10px,
            #1a212f 20px
    );
  }
`;

const StyledParagraph = styled(Paragraph)`
  font-family: 'Teko', sans-serif;
  color: ${({ theme }) => theme.secondary};
`;

const StyledHeading = styled(Heading)`
  color: ${({ theme }) => theme.secondary};
`;

const SkillsCard = ({ skills }) => (
  <Wrapper>
    <StyledHeading big>Skills:</StyledHeading>
    <ul>
      {skills.map((i) => (
        <li key={i}>
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
