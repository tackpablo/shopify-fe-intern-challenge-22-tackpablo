import { Box } from "@chakra-ui/react";
import ResponseItems from "../ResponseItems/ResponseItems";

function ResponseCard() {
  return (
    <>
      <Box
        width="4xl"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        mt="2em"
      >
        <ResponseItems />
      </Box>
    </>
  );
}

export default ResponseCard;
