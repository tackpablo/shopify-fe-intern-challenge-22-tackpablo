import { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Textarea,
} from "@chakra-ui/react";

function TextForm() {
  let [value, setValue] = useState("");

  let handleInputChange = (e) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };

  const isError = value === "";

  return (
    <>
      <FormControl isInvalid={isError}>
        <FormLabel htmlFor="text">Enter Prompt</FormLabel>
        <Textarea
          value={value}
          onChange={handleInputChange}
          placeholder="Here is a sample placeholder"
          size="sm"
        />

        {!isError ? (
          <FormHelperText>Entering prompt for AI translation...</FormHelperText>
        ) : (
          <FormErrorMessage>
            Enter a prompt for AI translation.
          </FormErrorMessage>
        )}

        <Button colorScheme="teal" variant="solid">
          Submit
        </Button>
      </FormControl>
    </>
  );
}

export default TextForm;
