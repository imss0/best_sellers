import styled from "styled-components";

export const StyledTitle = styled.h1`
  font-weight: 800;
  margin: 10px;
  text-align: center;
`;

export default function PageTitle({ title }) {
  return (
    <>
      <StyledTitle>{title}</StyledTitle>
    </>
  );
}
