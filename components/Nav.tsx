import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

interface NavTextProps {
  isActive?: boolean;
}

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  z-index: 1;
  background-color: #f2f2f0;
  position: fixed;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  top: 0;
`;

const NavText = styled.div<NavTextProps>`
  font-weight: 600;
  font-size: 24px;
  padding: 10px;
  cursor: pointer;
  &:hover {
    color: #f15e50;
    transform: scale(1.1);
    transition: color 0.5s, transform 0.5s;
  }
  ${({ isActive }) =>
    isActive &&
    `
    color: #f15e50;
    transform: scale(1.1);
    text-decoration: underline;
  `}
`;

export default function Nav() {
  const router = useRouter();
  const isHome = router.pathname === "/";
  const isAbout = router.pathname === "/about";

  return (
    <NavContainer>
      <Link href="/">
        <NavText isActive={isHome}>Home</NavText>
      </Link>
      <Link href="/about">
        <NavText isActive={isAbout}>About</NavText>
      </Link>
    </NavContainer>
  );
}
