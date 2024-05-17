import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  border: 1px solid #00000033;
  padding: 20px;
  border-radius: 4px;
`;
export const Block = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const Label = styled.label`
  margin-bottom: 10px;
`;

export const Input = styled.input`
  padding: 10px 20px;
  border: 1px solid #00000033;
  border-radius: 4px;
`;

export const Button = styled.button`
  align-self: flex-end;
  max-width: 200px;
  background-color: transparent;
  border: 1px solid #00000033;
  border-radius: 4px;
  height: 40px;
`;
