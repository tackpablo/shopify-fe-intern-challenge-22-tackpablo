import { useState } from "react";
import "./App.css";
import FormCard from "./components/FormCard/FormCard";
import ResponseCard from "./components/FormCard/ResponseCard";
import styled from "styled-components";
import { ChakraProvider, Center } from "@chakra-ui/react";

function App() {
  const [value, setValue] = useState("");
  const [apiResponse, setApiResponse] = useState({});

  return (
    <ChakraProvider>
      <AppDiv className="App">
        <h1>Fun with AI!</h1>
        <Center>
          <FormCard
            setApiResponse={setApiResponse}
            value={value}
            setValue={setValue}
          />
        </Center>
        <ResponseDiv>Responses</ResponseDiv>
        <ResponseCard apiResponse={apiResponse} value={value} />
      </AppDiv>
    </ChakraProvider>
  );
}

const AppDiv = styled.div`
  margin-top: 2em;
  font-size: 2em;
`;

const ResponseDiv = styled.div`
  margin-top: 2em;
  font-size: 1em;
`;

export default App;
