import React from 'react';
import SkillsCard from './SkillsCard';

export default {
  title: 'Molecules/SkillsCard',
  component: SkillsCard,
};

export const Default = () => (
  <SkillsCard skills={[
    'HTML5',
    'CSS3',
    'Sass/SCSS',
    'JavaScript',
    'React',
  ]}
  />
);
