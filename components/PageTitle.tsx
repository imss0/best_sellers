import styled from "styled-components";

export const StyledTitle = styled.h1`
  font-weight: 800;
`;

export default function PageTitle({ title }) {
  return (
    <>
      <StyledTitle>{title}</StyledTitle>
    </>
  );
}
