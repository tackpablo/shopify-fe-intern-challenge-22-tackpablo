import {
  FormControl,
  FormLabel,
  FormHelperText,
  Button,
  Textarea,
} from "@chakra-ui/react";

function TextForm(props) {
  const { setApiResponse, value, setValue, apiResponse } = props;

  let handleInputChange = (e) => {
    let inputValue = e.target.value;

    setValue(inputValue);
    console.log("VALUE: ", value);
  };

  const isError = value.length === 0;

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("SUBMITTED");
    console.log("VALUE FROM SUBMIT: ", value);
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
        Authorization: `Bearer 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`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => (returnedData = data.choices[0].text))
      .then(() => console.log("RETURNED DATA: ", returnedData))
      .then(() => setApiResponse(returnedData));
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
            size="sm"
            type="text"
          />

          {!isError && (
            <FormHelperText>
              Entering prompt for AI translation...
            </FormHelperText>
          )}

          <Button colorScheme="teal" variant="solid" type="submit">
            Submit
          </Button>
        </form>
      </FormControl>
    </>
  );
}

export default TextForm;
