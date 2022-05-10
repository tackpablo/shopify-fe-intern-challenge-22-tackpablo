import styled from "styled-components";

function ResponseItems(props) {
  const { apiResponse, value } = props;

  return (
    <>
      {value && apiResponse && (
        <ResponseDiv>
          <p>
            <strong>Prompt:</strong>
          </p>
          <p>{value}</p>
          <p>
            <strong>Response:</strong>
          </p>
          <p>{apiResponse}</p>
        </ResponseDiv>
      )}
    </>
  );
}

const ResponseDiv = styled.div`
  background-color: grey;
`;

export default ResponseItems;
