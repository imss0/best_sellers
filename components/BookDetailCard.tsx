import Link from "next/link";
import styled from "styled-components";

export const BookDetailContainer = styled.div`
  width: 250px;
  height: 500px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function BookDetailCard({ imgUrl, shopUrl, title, author }) {
  return (
    <>
      <BookDetailContainer>
        <img src={imgUrl} />
        <h3>{title}</h3>
        <p>{author}</p>
        <a href={shopUrl} target="_blank">
          <button>Buy now</button>
        </a>
      </BookDetailContainer>
    </>
  );
}
