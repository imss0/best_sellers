import styled from "styled-components";

export const PageContainerBox = styled.div`
  width: 80vw;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  margin: 70px auto;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function PageContainer({ children }) {
  return <PageContainerBox>{children}</PageContainerBox>;
}
