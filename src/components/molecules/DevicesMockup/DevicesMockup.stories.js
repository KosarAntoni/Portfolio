import React from 'react';
import laptopScreenshot from '../../../assets/Zrzut ekranu 2021-01-25 o 17.04.50.png';
import tabletScreenshot from '../../../assets/iPad.png';
import mobileScreenshot from '../../../assets/iPhone.png';
import DevicesMockup from './DevicesMockup';

export default {
  title: 'Molecules/DevicesMockup',
  component: DevicesMockup,
};

export const Default = () => (
  <DevicesMockup
    desktop={laptopScreenshot}
    tablet={tabletScreenshot}
    mobile={mobileScreenshot}
  />
);
