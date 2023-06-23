import { GetServerSideProps } from "next";
import PageTitle from "../components/PageTitle";
import CategoryTitle from "../components/CategoryTitle";

interface BestSellerCategoryList {}

export default function IndexPage({ bestSellerCategoryList }) {
  const list = bestSellerCategoryList.results;
  return (
    <>
      <PageTitle title="The New York Times Best Seller Explorer" />
      {list.map((item) => (
        <CategoryTitle
          key={item.list_name}
          title={item.display_name}
          url={item.list_name_encoded}
        />
      ))}
    </>
  );
}

export const getServerSideProps: GetServerSideProps<{
  bestSellerCategoryList: BestSellerCategoryList;
}> = async () => {
  const bestSellerCategoryList = await fetch(
    "https://books-api.nomadcoders.workers.dev/lists"
  ).then((res) => res.json());

  if (bestSellerCategoryList.error) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      bestSellerCategoryList,
    },
  };
};
