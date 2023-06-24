import styled from "styled-components";
import ClickBtn from "./ClickBtn";

export const BookDetailContainer = styled.div`
  width: 200px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BookImage = styled.img`
  width: 150px;
  height: 200px;
`;

export const BookTitle = styled.h3``;

export default function BookDetailCard({ imgUrl, shopUrl, title, author }) {
  return (
    <>
      <BookDetailContainer>
        <BookImage src={imgUrl} />
        <BookTitle>{title}</BookTitle>
        <p>{author}</p>
        <ClickBtn url={shopUrl} title={"Buy now"}></ClickBtn>
      </BookDetailContainer>
    </>
  );
}
