function ResponseItems(props) {
  const { response, prompt } = props;

  return (
    <>
      <p>
        <strong>Prompt:</strong>
      </p>
      <p>{prompt}</p>
      <p>
        <strong>Response:</strong>
      </p>
      <p>{response}</p>
    </>
  );
}

export default ResponseItems;
