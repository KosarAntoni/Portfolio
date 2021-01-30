import styled, { css } from 'styled-components';

const Link = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  transition: all 0.3s;
  color: ${({ theme }) => theme.secondary};
  text-decoration: none;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  overflow: hidden;
  
  ::after {
    position: absolute;
    content: '';
    bottom: 0;
    width: 100%;
    height: 2px;
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.secondary};
    transform: translateX(-100%);
    transition: transform 0.3s;
  }

  :hover,
  :focus{
    ::after {
      transform: translateX(0%);
    }
  }

  ${({ big }) => big && css`
    font-size: ${({ theme }) => theme.fontSize.m};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  `}
`;

export default Link;
