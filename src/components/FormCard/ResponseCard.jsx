import ResponseItems from "../ResponseItems/ResponseItems";

function ResponseCard(props) {
  const { apiResponse, value } = props;
  return (
    <>
      <ResponseItems value={value} apiResponse={apiResponse} />
    </>
  );
}

export default ResponseCard;
