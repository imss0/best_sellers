import styled from "styled-components";

export const BooksContainerGrid = styled.div`
  display: grid;
  place-items: center;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  max-width: 90%;
  margin: 0 auto;
`;

export default function GridContainer({ children }) {
  return (
    <>
      <BooksContainerGrid>{children}</BooksContainerGrid>
    </>
  );
}
