import styled, { css } from "styled-components";

export const LaneFrame = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50px;
  border: 2px solid darkblue;
  align-items: center;
  border-radius: 5px;
`;
export const LaneTitle = styled.div`
  font-size: 30px;
  padding-left: 5px;
`;
export const LaneDescription = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  height: 100%;
  font-size: 25px;
`;

export const ButtonContainer = styled.div`
  padding-right: 10px;
`;
export const Button = styled.button`
  color: white;
  padding: 0;
  width: 30px;
  height: 30px;
  border: none;

  ${({ remove }) =>
    remove &&
    css`
      background-color: red;
      transition: 0.5s;

      &:hover {
        background-color: rgba(255, 0, 0, 0.781);
      }
    `}

  ${({ done }) =>
    done &&
    css`
      background-color: green;
      transition: 0.5s;

      &:hover {
        background-color: rgba(0, 128, 0, 0.781);
      }
    `}
`;
