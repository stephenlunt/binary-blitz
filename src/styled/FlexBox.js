import styled from 'styled-components';

export const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CenteredBox = styled(FlexBox)`
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
