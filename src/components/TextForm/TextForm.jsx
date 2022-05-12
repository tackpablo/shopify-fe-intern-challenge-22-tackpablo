import { v4 as uuidv4 } from "uuid";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Button,
  Textarea,
  Spinner,
} from "@chakra-ui/react";
import { useState } from "react";

function TextForm(props) {
  const { setApiResponse, value, setValue } = props;
  const [isLoading, setIsLoading] = useState(false);

  let handleInputChange = (e) => {
    let inputValue = e.target.value;

    setValue(inputValue);
  };

  const isError = value === "";

  const onSubmitHandler = (e) => {
    setIsLoading(true);
    e.preventDefault();

    const query = value;

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
        setApiResponse((prev) => {
          const newResponse = [
            { id: uuidv4(), prompt: value, response: returnedData },
            ...prev,
          ];
          const responseObj = JSON.stringify(newResponse);
          localStorage.setItem("responseObj", responseObj);
          setIsLoading(false);
          setValue("");
          return newResponse;
        });
      });
  };

  return (
    <>
      <FormControl isInvalid={isError}>
        <FormLabel htmlFor="text">Enter Prompt</FormLabel>
        <form onSubmit={(e) => onSubmitHandler(e)}>
          <Textarea
            value={value}
            onChange={handleInputChange}
            placeholder="Enter a prompt for AI translation."
            size="lg"
            type="text"
            autoFocus
            aria-label="Enter Prompt Text Area"
          />

          {!isError && (
            <FormHelperText>
              Entering prompt for AI translation...
            </FormHelperText>
          )}

          <Button
            aria-label="Submit"
            tabIndex="0"
            colorScheme="teal"
            variant="solid"
            type="submit"
          >
            {isLoading ? <Spinner color="red.500" /> : "Submit"}
          </Button>
        </form>
      </FormControl>
    </>
  );
}

export default TextForm;
