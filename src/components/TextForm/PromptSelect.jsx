import { Select } from "@chakra-ui/react";
import styled from "styled-components";
import { options } from "../../data/data";

function PromptSelect(props) {
  const { setPromptValue, value, setValue } = props;

  // Handler for select value changes
  const selectChangeHandler = (e) => {
    const promptValue = e.target.value;
    setValue(promptValue);
    setPromptValue(promptValue);
  };

  return (
    <>
      <PromptLabel htmlFor="prompts">Preset Prompts</PromptLabel>
      <Select
        id="prompts"
        variant="outline"
        mb="1rem"
        placeholder="Select prompt"
        onChange={selectChangeHandler}
        value={value}
        backgroundColor="white"
      >
        {options.map((option) => {
          return (
            <option key={option.id} value={option.prompt}>
              {option.prompt}
            </option>
          );
        })}
      </Select>
    </>
  );
}

// Styled components
const PromptLabel = styled.label`
  display: flex;
  font-size: 1.2rem;
`;

export default PromptSelect;
