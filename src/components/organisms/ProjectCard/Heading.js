import styled from 'styled-components';
import { motion } from 'framer-motion';
import React from 'react';
import PropTypes from 'prop-types';
import Heading from '../../atoms/Heading/Heading';
import IconHint from '../../atoms/IconHint/IconHint';
import animation from './animation';
import MenuToggle from '../../atoms/MenuToggle/MenuToggle';

const HeadingWrapper = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  z-index: 4;
`;

const StyledHeading = styled(Heading)`
  color: ${({ theme }) => theme.background};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

const TechnologiesContainer = styled.div`
  display: flex;
`;

const CloseButtonWrapper = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  
  transform: translateY(${({ isSelected }) => (isSelected ? '0%' : '-200%')});
  transition: all 0.3s;

  path {
    stroke: ${({ theme }) => theme.background}
  }
`;

const CardHeading = ({
  title, technologies, isSelected, handleClose,
}) => (
  <HeadingWrapper
    layout
    transition={animation}
  >
    <StyledHeading big>{title}</StyledHeading>
    <TechnologiesContainer>
      {technologies.map((i) => (
        <IconHint
          icon={i.icon}
          key={i.name}
        >
          {i.name}
        </IconHint>
      ))}
    </TechnologiesContainer>
    <CloseButtonWrapper
      isSelected={isSelected}
      onClick={handleClose}
    >
      <MenuToggle isOpen />
    </CloseButtonWrapper>
  </HeadingWrapper>
);

CardHeading.propTypes = {
  title: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  isSelected: PropTypes.bool,
  handleClose: PropTypes.func.isRequired,
};

CardHeading.defaultProps = {
  isSelected: false,
};

export default CardHeading;
