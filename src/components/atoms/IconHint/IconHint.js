import styled from 'styled-components';

const IconHint = styled.div`
  position: relative;
  height: 1.8rem;
  width: 1.8rem;
  font-size: 0;
  cursor: help;

  ::after {
    visibility: hidden;
    display: block;
    position: absolute;
    bottom: -200%;
    white-space: nowrap;
    font-size: ${({ theme }) => theme.fontSize.xs};
    content: '${({ children }) => children}';
    text-align: center;
    left: -1.5rem;

    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.secondary};
    padding: 0.5rem 1rem;
    border-radius: 4px;
    box-shadow: 0 4px 12px rgba(173, 152, 143, 0.18);
    opacity: 0;
    transition: all 0.3s;
  }

  ::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    mask: url(${({ icon }) => icon}) no-repeat 50% 50%;
    mask-size: 1.5rem;
    background-color: ${({ theme }) => theme.background};
  }

  :hover::after {
    visibility: visible;
    opacity: 1;
  }

`;

export default IconHint;
