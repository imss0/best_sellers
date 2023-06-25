import styled from "styled-components";
import ClickBtn from "./ClickBtn";
import Rank from "./Rank";

export const BookDetailContainer = styled.div`
  width: 150px;
  height: 385px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const BookImage = styled.img`
  width: 150px;
  height: 200px;
`;

export const BookTitle = styled.h3`
  font-size: 16px;
  margin: 5px 0 0 0;
  max-width: 150px;
  line-height: 1.1;
`;

export const BookAuthor = styled.p`
  color: #f15e50;
  max-width: 150px;
  font-size: 14px;
  line-height: 1.1;
  margin: 5px 0;
`;

export default function BookDetailCard({
  imgUrl,
  shopUrl,
  title,
  author,
  currentRank,
  lastRank,
}) {
  return (
    <>
      <BookDetailContainer>
        <BookImage src={imgUrl} />
        <BookTitle>{title}</BookTitle>
        <BookAuthor>{author}</BookAuthor>
        <Rank currentRank={currentRank} lastRank={lastRank} />
        <ClickBtn url={shopUrl} title={"Buy now"}></ClickBtn>
      </BookDetailContainer>
    </>
  );
}
