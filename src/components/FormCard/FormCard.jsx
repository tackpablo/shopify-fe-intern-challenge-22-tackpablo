import { Box } from "@chakra-ui/react";
import TextForm from "../TextForm/TextForm";

function FormCard(props) {
  const { setApiResponse, value, setValue } = props;
  return (
    <>
      <Box
        width="4xl"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        mt="2em"
      >
        <TextForm
          setApiResponse={setApiResponse}
          value={value}
          setValue={setValue}
        />
      </Box>
    </>
  );
}

export default FormCard;
