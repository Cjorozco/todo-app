import React from 'react';
import styled, { keyframes } from "styled-components";

const loadingAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  box-shadow: 0px 5px 50px rgba(32, 35, 41, 0.15);
  background: linear-gradient(90deg, rgba(250,250,250,1), rgb(200, 199, 199));
  background-size: 400% 400%;
  animation: ${loadingAnimation} 3s ease-in-out infinite;
`;

const Text = styled.p`
  margin: 24px 0 24px 24px;
  width: calc(100% - 120px);
  font-size: 18px;
  line-height: 24px;
  font-weight: 400;
`;

const Icon = styled.span`
  border-radius: 50px;
  height: 48px;
  width: 48px;
  background: linear-gradient(90deg, rgba(250,250,250,1), rgb(200, 199, 199));
  background-size: 400% 400%;
  animation: ${loadingAnimation} 3s ease-in-out infinite;
`;

const CompleteIcon = styled(Icon)`
  position: absolute;
  left: 12px;
`;

const DeleteIcon = styled(Icon)`
  position: absolute;
  top: -24px;
  right: 0;
`;

const TodoLoading = () => {
  return (
    <Container>
      <CompleteIcon />
      <Text>Cargando TODOs...</Text>
      <DeleteIcon />
    </Container>
  );
}

export { TodoLoading };