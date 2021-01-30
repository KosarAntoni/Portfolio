import React from 'react';
import CardLink from './CardLink';

export default {
  title: 'Atoms/CardLink',
  component: CardLink,
};

export const Normal = () => <CardLink href="https://www.google.pl/">Google.com</CardLink>;
export const Button = () => <CardLink button href="https://www.google.pl/">Google.com</CardLink>;
