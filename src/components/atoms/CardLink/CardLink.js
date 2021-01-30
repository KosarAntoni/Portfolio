import styled, { css } from 'styled-components';

const CardLink = styled.a`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
  
  color: ${({ theme }) => theme.primary};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.s};
  text-decoration: none;
  padding: 0.5rem 2rem;

  :hover,
  :focus{
    color: ${({ theme }) => theme.grey};
  }

  ${({ button }) => button && css`
    border: 1px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
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

export default CardLink;
