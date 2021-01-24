import React from 'react';
import SocialLink from './SocialLink';
import linkedinIcon from '../../../assets/icons/linkedin-in-brands.svg';
import facebookIcon from '../../../assets/icons/facebook-f-brands.svg';
import githubIcon from '../../../assets/icons/github-alt-brands.svg';

export default {
  title: 'Atoms/SocialLink',
  component: SocialLink,
};

export const LinkedIn = () => <SocialLink href="https://www.google.pl/" icon={linkedinIcon} />;
export const Facebook = () => <SocialLink href="https://www.google.pl/" icon={facebookIcon} />;
export const GitHub = () => <SocialLink href="https://www.google.pl/" icon={githubIcon} />;
