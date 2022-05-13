import { Box } from "@chakra-ui/react";
import PromptForm from "./PromptForm";

function FormCard(props) {
  const { setStorageData, promptValue, setPromptValue } = props;
  return (
    <>
      <Box width="4xl" overflow="hidden" mt="2em">
        <PromptForm
          setStorageData={setStorageData}
          promptValue={promptValue}
          setPromptValue={setPromptValue}
        />
      </Box>
    </>
  );
}

export default FormCard;
