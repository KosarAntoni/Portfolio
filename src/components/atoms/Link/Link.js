import styled, { css } from 'styled-components';

const Link = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  transition: all 0.3s;
  color: ${({ theme }) => theme.secondary};
  text-decoration: none;
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  :hover,
  :focus{
    color: ${({ theme }) => theme.grey};
  }

  ${({ big }) => big && css`
    font-size: ${({ theme }) => theme.fontSize.m};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  `}
`;

export default Link;
