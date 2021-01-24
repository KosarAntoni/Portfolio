import styled, { css } from 'styled-components';

const Link = styled.a`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
  color: ${({ theme }) => theme.primary};
  text-decoration: none;

  border-bottom: 2px solid transparent;

  :hover,
  :focus{
    color: ${({ theme }) => theme.primary};
    border-bottom: ${({ theme }) => `2px solid ${theme.primary}`};
  }

  ${({ big }) => big && css`
    border: 1px solid ${({ theme }) => theme.primary};
    font-size: ${({ theme }) => theme.fontSize.m};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    padding: 0.5rem 1rem;
    border-radius: 10rem;

    :after {
      display: block;
      content: '';
      width: 100%;
      height: 100%;
      border-radius: 10rem;
      position: absolute;
      box-shadow: 0 4px 16px ${({ theme }) => theme.black};
      opacity: 0;
    }

    :hover,
    :focus {
      background-color: ${({ theme }) => theme.primary};
      border: 1px solid ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.secondary};

      ::after {
        opacity: 0.1;
      }
    `}
`;

export default Link;
