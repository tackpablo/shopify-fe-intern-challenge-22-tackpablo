import { Box } from "@chakra-ui/react";
import TextForm from "../TextForm/TextForm";

function FormCard() {
  return (
    <>
      <Box
        width="4xl"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        mt="2em"
      >
        <TextForm />
      </Box>
    </>
  );
}

export default FormCard;
