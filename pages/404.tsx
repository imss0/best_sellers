import PageTitle from "../components/PageTitle";
import ClickBtn from "../components/ClickBtn";
import PageContainer from "../components/PageContainer";

export default function NotFound() {
  return (
    <PageContainer>
      <PageTitle title="Looks like you are lost" isTitle={true} />
      <h2>The page you are looking for not available.</h2>
      <ClickBtn url="/" title="Go Home" />
    </PageContainer>
  );
}
