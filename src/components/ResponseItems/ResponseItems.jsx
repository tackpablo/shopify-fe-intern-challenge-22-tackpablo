import styled from "styled-components";
import { Box } from "@chakra-ui/react";

function ResponseItems(props) {
  const { apiResponse, value } = props;

  return (
    <>
      {value &&
        apiResponse &&
        apiResponse.map((item) => {
          return (
            <Box
              width="4xl"
              height="fit-content"
              bg="grey"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              mt="1em"
              mb="1em"
              fontSize="2xl"
            >
              <p>
                <strong>Prompt:</strong>
              </p>
              <p>{item.prompt}</p>
              <p>
                <strong>Response:</strong>
              </p>
              <p>{item.response}</p>
            </Box>
          );
        })}
    </>
  );
}

const ResponseDiv = styled.div`
  background-color: grey;
  padding: 1em;
`;

export default ResponseItems;
