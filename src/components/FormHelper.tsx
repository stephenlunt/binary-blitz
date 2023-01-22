import { FC, useState } from 'react';
import { SecondaryButton } from '../styled/Buttons';

const FormHelper: FC = () => {
  const [visible, setVisible] = useState(false);

  function handleHintButton() {
    setVisible((prevVisible) => !prevVisible);
  }

  if (visible) {
    return (
      <div>
        <SecondaryButton onClick={handleHintButton}>Hint</SecondaryButton>
        <div>
          <span>512</span>
          <span>256</span>
          <span>128</span>
          <span>64</span>
          <span>32</span>
          <span>16</span>
          <span>8</span>
          <span>4</span>
          <span>2</span>
          <span>1</span>
        </div>
      </div>
    );
  } else {
    return <SecondaryButton onClick={handleHintButton}>Hint</SecondaryButton>;
  }
};

export default FormHelper;
