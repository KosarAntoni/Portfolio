import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DeviceMockup from '../../atoms/DeviceMockup/DeviceMockup';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  position: relative;
  
  max-width: 500px;
  width: 100%;
`;

const BackgroundWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: flex-end;
  width: 100%;
`;

const FrontDeviceContainer = styled.div`
  position: relative;
  z-index: 5;
  filter: drop-shadow(16px 16px 20px rgba(0,0,0,0.5));
`;

const BackgroundDeviceContainer = styled.div`
  display: flex;
  justify-content: ${({ right }) => (right ? 'flex-end' : 'flex-start')};
  width: 50%;
  overflow: hidden;
  filter: drop-shadow(16px 16px 20px rgba(0,0,0,0.5));
`;

const DeviceMockupWrapperLeft = styled(motion.div)`
  transform: translateX(${({ isOpen }) => (isOpen ? '0%' : '100%')});
  transition: all 0.3s ease-out;
`;

const DeviceMockupWrapperRight = styled(motion.div)`
  transform: translateX(${({ isOpen }) => (isOpen ? '0%' : '-100%')});
  transition: all 0.3s ease-out;
`;

const DevicesMockup = ({
  mobile, tablet, desktop, isOpen,
}) => (
  <Wrapper>
    <FrontDeviceContainer>
      <DeviceMockup img={mobile} />
    </FrontDeviceContainer>
    <BackgroundWrapper>
      <BackgroundDeviceContainer>
        <DeviceMockupWrapperLeft
          layout
          isOpen={isOpen}
          transition={{ type: 'spring', stiffness: 200, damping: 30 }}
        >
          <DeviceMockup desktop img={desktop} />
        </DeviceMockupWrapperLeft>
      </BackgroundDeviceContainer>
      <BackgroundDeviceContainer right>
        <DeviceMockupWrapperRight
          layout
          isOpen={isOpen}
          transition={{ type: 'spring', stiffness: 200, damping: 30 }}
        >
          <DeviceMockup tablet img={tablet} />
        </DeviceMockupWrapperRight>
      </BackgroundDeviceContainer>
    </BackgroundWrapper>

  </Wrapper>
);

DevicesMockup.propTypes = {
  mobile: PropTypes.string.isRequired,
  tablet: PropTypes.string.isRequired,
  desktop: PropTypes.string.isRequired,
  isOpen: PropTypes.bool,
};

DevicesMockup.defaultProps = {
  isOpen: false,
};

export default DevicesMockup;
