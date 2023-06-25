import PageContainer from "../components/PageContainer";
import PageTitle from "../components/PageTitle";

export default function AboutPage() {
  return (
    <PageContainer>
      <PageTitle title="About us" isTitle={true} />
      <p>
        Welcome to the official explorer for The New York Times Best Seller list
        explorer. We hope you find the book you fancy!
      </p>
    </PageContainer>
  );
}
