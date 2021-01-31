import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import DeviceMockup from '../../atoms/DeviceMockup/DeviceMockup';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  position: relative;
  
  max-width: 500px;
  width: 100%;
  margin: auto;
`;

const BackgroundWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: flex-end;
  width: 100%;
`;

const FrontDeviceContainer = styled.div`
  z-index: 10;
`;

const BackgroundDeviceContainer = styled.div`
  display: flex;
  justify-content: ${({ right }) => (right ? 'flex-end' : 'flex-start')};
  width: 50%;
  overflow: hidden;
  z-index: -1;
`;

const DeviceMockupWrapper = styled(motion.div)`
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
        <DeviceMockupWrapper
          initial={false}
          animate={{ x: isOpen ? '0' : '100%' }}
          transition={{ type: 'spring', duration: 0.8, bounce: 0 }}
        >
          <DeviceMockup desktop img={desktop} />
        </DeviceMockupWrapper>
      </BackgroundDeviceContainer>
      <BackgroundDeviceContainer right>
        <DeviceMockupWrapper
          initial={false}
          animate={{ x: isOpen ? '0' : '-100%' }}
          transition={{ type: 'spring', duration: 0.8, bounce: 0 }}
        >
          <DeviceMockup tablet img={tablet} />
        </DeviceMockupWrapper>
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
