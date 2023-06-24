import Link from "next/link";
import styled from "styled-components";

export const CategoryDiv = styled.div`
  border: none;
  border-radius: 10px;
  background-color: pink;
  max-width: 200px;
  padding: 5px;
  margin: 10px;
`;

export default function ClickBtn({ url, title }) {
  if (url.startsWith("http")) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer">
        <CategoryDiv>{title}</CategoryDiv>
      </a>
    );
  }

  return (
    <Link href={`/list/${url}`}>
      <CategoryDiv>{title}</CategoryDiv>
    </Link>
  );
}
