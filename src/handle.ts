import styled from 'styled-components';

const StyledHandle = styled.div`
  position: absolute;
  width: 5px;
  background: white;
  cursor: pointer;

  &:after {
    position: absolute;
    top: 40%;
    left: -0.875rem;
    display: flex;
    width: 2rem;
    height: 2rem;
    border: 1px solid rgba(0, 0, 0, 0.6);
    border-radius: 1.5rem;
    background: rgb(200, 200, 200);
    color: rgba(0, 0, 0, 0.6);
    content: '••';
    font-size: 1rem;
    transition: transform 0.2s;
    transform: scale(0.97);

    align-items: center;
    justify-content: center;
  }

  &:hover:after {
    transform: scale(1.1);
  }
`;

export default StyledHandle;
