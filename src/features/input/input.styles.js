import styled from "styled-components";

export const InputContainer = styled.form`
  display: flex;
  margin-top: 100px;
  gap: 20px;
  justify-content: center;
`;
export const InputStyled = styled.input`
  font-size: 35px;
  width: 400px;
  height: 50px;
  border: 2px solid black;
  border-radius: 5px;
`;

export const InputButton = styled.button`
  background-color: #d99376;
  color: white;
  padding: 8px 20px;
  border: none;
  transition: 0.5s;
  border-radius: 5px;

  &:hover {
    transform: scale(1.05);
    background-color: #e97451;
  }
`;
