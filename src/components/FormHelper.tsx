import { FC, useState } from 'react';

import { SecondaryButton } from '../styled/Buttons';
import { CenteredBox } from '../styled/FlexBox';
import { HintContainer, HintItem } from '../styled/HintContainer';

/**
 * Renders the hint row with toggle button.
 */
const FormHelper: FC = () => {
  const [visible, setVisible] = useState(false);

  function handleHintButton() {
    setVisible((prevVisible) => !prevVisible);
  }

  if (visible) {
    return (
      <div>
        <CenteredBox>
          <SecondaryButton onClick={handleHintButton}>
            Hide Hints
          </SecondaryButton>
        </CenteredBox>
        <HintContainer>
          <HintItem>512</HintItem>
          <HintItem>256</HintItem>
          <HintItem>128</HintItem>
          <HintItem>64</HintItem>
          <HintItem>32</HintItem>
          <HintItem>16</HintItem>
          <HintItem>8</HintItem>
          <HintItem>4</HintItem>
          <HintItem>2</HintItem>
          <HintItem>1</HintItem>
        </HintContainer>
      </div>
    );
  } else {
    return (
      <CenteredBox>
        <SecondaryButton onClick={handleHintButton}>Show Hints</SecondaryButton>
      </CenteredBox>
    );
  }
};

export default FormHelper;
