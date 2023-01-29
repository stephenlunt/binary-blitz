import styled from 'styled-components';

export const BorderBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #11001a;
  border-top: 2px solid #569ed3;
  border-bottom: 2px solid #569ed3;
  margin: 1rem auto;
  padding: 0.5rem 3rem;
  font-weight: bold;
`;

export const NumberBox = styled.span`
  font-size: 1.6rem;
  padding-top: 0.5rem;
`;

export const LevelBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #008000;
  border: 2px solid #2a6318;
  margin: 1rem auto;
  padding: 0.7rem 1.5rem;
  font-weight: bold;
`;

export const MessageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding-top: 1rem;
  font-weight: bold;
`;
