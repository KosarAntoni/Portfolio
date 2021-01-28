import styled from 'styled-components';

const SocialLink = styled.a`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  border-radius: 100%;
  transition: all 0.3s;
  border: 1px solid ${({ theme }) => theme.background};

  :before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    mask: url(${({ icon }) => icon}) no-repeat 50% 50%;
    mask-size: 1.5rem;
    background-color: ${({ theme }) => theme.background};
  }
  
  :after {
    display: block;
    content: '';
    width: 100%;
    height: 100%;
    border-radius: 100%;
    position: absolute;
    box-shadow: 0 4px 16px ${({ theme }) => theme.black};
    opacity: 0;
  }

  :hover,
  :focus {
    background-color: ${({ theme }) => theme.background};
    border: 1px solid ${({ theme }) => theme.background};


    ::after {
      opacity: 0.1;
    }
    
    ::before{
      background-color: ${({ theme }) => theme.secondary};
    }
  }

`;

export default SocialLink;
