import React from 'react';
import DeviceMockup from './DeviceMockup';

export default {
  title: 'Atoms/DeviceMockup',
  component: DeviceMockup,
};

export const Desktop = () => <DeviceMockup desktop />;
export const Tablet = () => <DeviceMockup tablet />;
export const Mobile = () => <DeviceMockup />;
