import { useState } from "react";
import "./App.css";
import FormCard from "./components/TextForm/FormCard";
import ResponseCard from "./components/ResponseItems/ResponseCard";
import styled from "styled-components";
import { ChakraProvider, Center } from "@chakra-ui/react";

function App() {
  const [promptValue, setPromptValue] = useState("");
  const [storageData, setStorageData] = useState([]);

  return (
    <ChakraProvider>
      <AppDiv className="App">
        <TitleDiv>Fun with OpenAI!</TitleDiv>
        <Center>
          <DescDiv>
            Using a powerful AI model, this app is able to process plain text
            prompts and produce outputs that are hard to distinguish from human
            writing.
          </DescDiv>
        </Center>
        <Center>
          <FormCard
            storageData={storageData}
            setStorageData={setStorageData}
            promptValue={promptValue}
            setPromptValue={setPromptValue}
          />
        </Center>
        <Center>
          <ResponseDiv>
            Responses
            <ResponseCard
              storageData={storageData}
              setStorageData={setStorageData}
              promptValue={promptValue}
            />
          </ResponseDiv>
        </Center>
      </AppDiv>
    </ChakraProvider>
  );
}

// Styled components
const TitleDiv = styled.div`
  font-size: 2em;
`;

const AppDiv = styled.div`
  margin-top: 2em;
  font-size: 2em;
`;

const DescDiv = styled.div`
  margin-top: 2em;
  font-size: 0.5em;
  width: 30%;
`;

const ResponseDiv = styled.div`
  margin-top: 2em;
  font-size: 1em;
`;

export default App;
