import styled from "styled-components";

export const StyledTitle = styled.h1`
  font-weight: 800;
  margin: 20px 10px;
  text-align: center;
`;
export const StyledSubTitle = styled(StyledTitle)`
  font-weight: 600;
  font-size: 20px;
`;

export default function PageTitle({ title, isTitle }) {
  return (
    <>
      {isTitle ? (
        <StyledTitle>{title}</StyledTitle>
      ) : (
        <StyledSubTitle>{title}</StyledSubTitle>
      )}
    </>
  );
}
