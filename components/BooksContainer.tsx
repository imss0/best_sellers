import styled from "styled-components";

export const BooksContainerGrid = styled.div`
  display: grid;
  place-items: center;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  max-width: 90%;
  margin: 0 auto;
`;

export default function BooksContainer({ children }) {
  return (
    <>
      <BooksContainerGrid>{children}</BooksContainerGrid>
    </>
  );
}
