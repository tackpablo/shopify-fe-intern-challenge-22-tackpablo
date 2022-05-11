import ResponseItems from "../ResponseItems/ResponseItems";
import { Box } from "@chakra-ui/react";
import { useEffect } from "react";

function ResponseCard(props) {
  const { apiResponse, setApiResponse } = props;

  useEffect(() => {
    if (localStorage.getItem("responseObj")) {
      const parsedResponse = JSON.parse(localStorage.getItem("responseObj"));
      setApiResponse(parsedResponse);
    }
  }, []);

  return (
    <>
      {apiResponse
        ? apiResponse.map((item, index) => {
            return (
              <Box
                width="4xl"
                height="fit-content"
                bg="RGBA(0, 0, 0, 0.06)"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                mt="1em"
                mb="1em"
                fontSize="2xl"
                key={index}
              >
                <ResponseItems response={item.response} prompt={item.prompt} />
              </Box>
            );
          })
        : []}
    </>
  );
}

export default ResponseCard;
