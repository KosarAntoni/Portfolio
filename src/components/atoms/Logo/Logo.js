import styled from 'styled-components';
import logo from '../../../assets/icons/logo.svg';

const Logo = styled.a`
  display: block;
  width: 4rem;
  height: 4rem;

  cursor: pointer;

  background-image: linear-gradient(-225deg, #2CD8D5 0%, #6B8DD6 48%, #8E37D7 100%);
  border-radius: 100%;
  
  ::after {
    display: block;
    content: '';
    width: 100%;
    height: 100%;

    background-image: url(${logo});
    background-size: 3.5rem;
    background-repeat: no-repeat;
    background-position: 50%;
  }
`;

export default Logo;
