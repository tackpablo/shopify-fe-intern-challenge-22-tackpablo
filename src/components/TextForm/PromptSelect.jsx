import { Select } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import styled from "styled-components";

function PromptSelect(props) {
  const { promptValue, setPromptValue } = props;

  const options = [
    {
      id: 1,
      prompt: "Write a story about Shopify",
    },
    {
      id: 2,
      prompt: "What does good customer service look like",
    },
    {
      id: 3,
      prompt: "Would I be a good intern",
    },
  ];

  const handleChange = (e) => {
    const promptValue = e.target.value;
    console.log(e.target.value);

    setPromptValue(promptValue);
  };

  return (
    <>
      <PromptLabel htmlFor="prompts">Preset Prompts</PromptLabel>
      <Select
        id="prompts"
        variant="outline"
        mb="1rem"
        onChange={handleChange}
        placeholder="Select Prompt"
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

const PromptLabel = styled.label`
  display: flex;
  font-size: 1.2rem;
`;

export default PromptSelect;
