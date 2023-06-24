import Link from "next/link";
import styled from "styled-components";

export const StyledBtn = styled.button`
  border: none;
  border-radius: 5px;
  background-color: #f0dd4b;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  max-width: 200px;
  padding: 10px;
  margin: 5px 10px;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    background-color: #5c9c74;
    transition: background-color 0.5s transform 0.5s;
  }
  &::after {
    content: "→";
  }
`;

export default function ClickBtn({ url, title }) {
  if (url.startsWith("http")) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer">
        <StyledBtn>{title}</StyledBtn>
      </a>
    );
  }

  return (
    <Link href={`/list/${url}`}>
      <StyledBtn>{title}</StyledBtn>
    </Link>
  );
}
