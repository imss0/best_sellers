import styled from "styled-components";
import ClickBtn from "./ClickBtn";

export const BookDetailContainer = styled.div`
  width: 150px;
  height: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BookImage = styled.img`
  width: 150px;
  height: 200px;
`;

export const BookTitle = styled.h3`
  font-size: 16px;
  margin-top: 5px;
  max-width: 150px;
  text-align: left;
`;

export const BookAuthor = styled.p`
  color: #f15e50;
  max-width: 150px;
  font-size: 14px;
  margin-top: 5px;
  text-align: left;
`;

export default function BookDetailCard({ imgUrl, shopUrl, title, author }) {
  return (
    <>
      <BookDetailContainer>
        <BookImage src={imgUrl} />
        <BookTitle>{title}</BookTitle>
        <BookAuthor>{author}</BookAuthor>
        <ClickBtn url={shopUrl} title={"Buy now"}></ClickBtn>
      </BookDetailContainer>
    </>
  );
}
