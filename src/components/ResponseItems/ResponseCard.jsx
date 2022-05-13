import ResponseItems from "./ResponseItems";
import { Box } from "@chakra-ui/react";
import { useEffect } from "react";

function ResponseCard(props) {
  const { storageData, setStorageData } = props;

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
              <div key={index}>
                <Box
                  width="4xl"
                  height="fit-content"
                  bg="RGBA(0, 0, 0, 0.06)"
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                  mt="1rem"
                  mb="1rem"
                  fontSize="2xl"
                  padding="1rem"
                >
                  <ResponseItems
                    response={item.response}
                    prompt={item.prompt}
                  />
                </Box>
              </div>
            );
          })
        : []}
    </>
  );
}

export default ResponseCard;
