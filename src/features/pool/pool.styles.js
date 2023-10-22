import styled from "styled-components";

export const PoolFrame = styled.div`
  margin: 100px 20px 0;
  width: auto;
  height: auto;
  border: 2px solid black;
  border-radius: 5px;
`;

export const PoolLanes = styled.div`
  margin: 20px;
  display: grid;
  height: max-content;
  gap: 40px;
  grid-template-rows: repeat(5, 1fr);
`;
