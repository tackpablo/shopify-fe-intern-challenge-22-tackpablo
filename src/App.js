import "./App.css";
import FormCard from "./components/FormCard/FormCard";
import styled from "styled-components";
import { ChakraProvider, Center } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <AppDiv className="App">
        <h1>Fun with AI!</h1>
        <Center>
          <FormCard />
        </Center>
      </AppDiv>
    </ChakraProvider>
  );
}

const AppDiv = styled.div`
  margin-top: 2em;
  font-size: 2em;
`;

export default App;
