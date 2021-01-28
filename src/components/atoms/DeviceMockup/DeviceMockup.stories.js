import React from 'react';
import DeviceMockup from './DeviceMockup';
import laptopScreenshot from '../../../assets/Zrzut ekranu 2021-01-25 o 17.04.50.png';
import tabletScreenshot from '../../../assets/iPad.png';
import mobileScreenshot from '../../../assets/iPhone.png';

export default {
  title: 'Atoms/DeviceMockup',
  component: DeviceMockup,
};

export const Desktop = () => <DeviceMockup desktop img={laptopScreenshot} />;
export const Tablet = () => <DeviceMockup tablet img={tabletScreenshot} />;
export const Mobile = () => <DeviceMockup img={mobileScreenshot} />;
