import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Button,
  Textarea,
  Spinner,
  Center,
  FormErrorMessage,
} from "@chakra-ui/react";
import PromptSelect from "./PromptSelect";

function PromptForm(props) {
  const { setStorageData, promptValue, setPromptValue } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // Handler for textarea input value change
  const handleInputChange = (e) => {
    let inputValue = e.target.value;
    setPromptValue(inputValue);
  };

  const clearStorageHandler = () => {
    localStorage.clear();
    setStorageData([]);
  };

  // Handler for submission of prompt to make API request to OpenAI
  const onSubmitHandler = (e) => {
    setIsLoading(true);
    e.preventDefault();

    // If no prompt, no API request is made
    if (promptValue === "") {
      setIsLoading(false);
      setIsError(true);
      setTimeout(() => {
        setIsError(false);
      }, "2000");
      return;
    }

    const query = promptValue;

    const data = {
      prompt: `${query}`,
      temperature: 0.5,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    };

    let returnedData;

    fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_OPENAI_SECRET}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => (returnedData = data.choices[0].text))
      .then(() => {
        setStorageData((prev) => {
          const newResponse = [
            { id: uuidv4(), prompt: promptValue, response: returnedData },
            ...prev,
          ];
          const responseObj = JSON.stringify(newResponse);
          localStorage.setItem("responseObj", responseObj);
          setIsLoading(false);
          setPromptValue("");
          document
            .querySelector("#prompts")
            .setAttribute("value", "Select Prompt");
          return newResponse;
        });
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(true);
        setPromptValue("");
        setTimeout(() => {
          setIsError(false);
        }, "2000");
        return;
      });
  };

  return (
    <>
      <FormControl isInvalid={isError}>
        <Center>
          <FormLabel
            htmlFor="text"
            mt="1rem"
            mb="1rem"
            fontSize="1.5rem"
            fontWeight="700"
          >
            Enter Prompt
          </FormLabel>
        </Center>
        <form onSubmit={(e) => onSubmitHandler(e)}>
          <PromptSelect
            mb="1rem"
            promptValue={promptValue}
            setPromptValue={setPromptValue}
          />
          <Textarea
            value={promptValue}
            onChange={handleInputChange}
            placeholder="Enter a prompt for AI translation."
            size="lg"
            type="text"
            autoFocus
            aria-label="Enter Prompt Text Area"
            height="5ch"
          />

          {!isError ? (
            <FormHelperText>Enter prompt for AI translation...</FormHelperText>
          ) : (
            <FormErrorMessage>
              There was an error. Please try again.
            </FormErrorMessage>
          )}
          <Button
            aria-label="Clear Storage"
            tabIndex="0"
            colorScheme="red"
            variant="solid"
            type="button"
            mt="1rem"
            mb="1rem"
            mr="1rem"
            onClick={clearStorageHandler}
          >
            Clear History
          </Button>
          <Button
            aria-label="Submit Prompt"
            tabIndex="0"
            colorScheme="teal"
            variant="solid"
            type="submit"
            mt="1rem"
            mb="1rem"
          >
            {isLoading ? <Spinner color="red.500" /> : "Submit"}
          </Button>
        </form>
      </FormControl>
    </>
  );
}

export default PromptForm;
