import Link from "next/link";
import styled from "styled-components";

export const CategoryDiv = styled.div`
  border: none;
  border-radius: 10px;
  background-color: beige;
  margin: 10px;
`;

export default function CategoryTitle({ url, title }) {
  return (
    <>
      <Link href={`/list/${url}`}>
        <CategoryDiv>{title}</CategoryDiv>
      </Link>
    </>
  );
}
