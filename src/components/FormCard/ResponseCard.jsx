import { Box } from "@chakra-ui/react";
import ResponseItems from "../ResponseItems/ResponseItems";

function ResponseCard(props) {
  const { apiResponse, value } = props;
  return (
    <>
      <Box
        width="4xl"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        mt="2em"
      >
        <ResponseItems value={value} />
      </Box>
    </>
  );
}

export default ResponseCard;
