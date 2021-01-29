import styled from 'styled-components';
import logo from '../../../assets/icons/logo.svg';

const Logo = styled.a`
  display: block;
  width: 4rem;
  height: 4rem;
  cursor: pointer;

  mask: url(${logo}) no-repeat 50% 50%;
  mask-size: 4rem;
  background-color: ${({ theme }) => theme.secondary};
`;

export default Logo;
