import styled from 'styled-components';

const Button = styled.button`
  background-color: #6fbded;
  border: 2px solid #569ed3;
  border-radius: 5px;
  margin: 1rem auto;
  font-weight: bold;
  cursor: pointer;
`;

export const PrimaryButton = styled(Button)`
  line-height: 32px;
  padding: 2px 25px;
  font-size: 18px;
`;

export const SecondaryButton = styled(Button)`
  line-height: 22px;
  padding: 1px 5px;
`;
