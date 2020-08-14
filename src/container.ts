import styled from 'styled-components';

const StyledContainer = styled.div`
  position: relative;
  padding-right: 0;
  padding-left: 0;

  .react-draggable {
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 50%;
  }

  img {
    object-fit: cover;
  }
`;

export default StyledContainer;
