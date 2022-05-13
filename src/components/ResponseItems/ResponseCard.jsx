import ResponseItems from "./ResponseItems";
import { useEffect } from "react";
import { Box, ScaleFade } from "@chakra-ui/react";

function ResponseCard(props) {
  const { storageData, setStorageData } = props;

  // Check localStorage for any saved prompts and responses on load
  useEffect(() => {
    if (localStorage.getItem("responseObj")) {
      const parsedResponse = JSON.parse(localStorage.getItem("responseObj"));
      setStorageData(parsedResponse);
    }
  }, []);

  return (
    <>
      {storageData
        ? storageData.map((item, index) => {
            return (
              <ScaleFade in={true} key={index}>
                <Box
                  maxWidth="4xl"
                  height="fit-content"
                  bg="RGBA(0, 0, 0, 0.06)"
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                  mt="1rem"
                  mb="1rem"
                  fontSize="xl"
                  padding="1rem"
                >
                  <ResponseItems
                    response={item.response}
                    prompt={item.prompt}
                  />
                </Box>
              </ScaleFade>
            );
          })
        : []}
    </>
  );
}

export default ResponseCard;
