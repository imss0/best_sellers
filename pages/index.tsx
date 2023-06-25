import { GetStaticProps } from "next";
import PageTitle from "../components/PageTitle";
import CategoryTitle from "../components/ClickBtn";
import PageContainer from "../components/PageContainer";
import { CategoryList, Category } from "../interfaces";

export default function IndexPage({ bestSellerCategoryList }) {
  const list = bestSellerCategoryList.results;
  return (
    <PageContainer>
      <PageTitle
        title="The New York Times Best Seller Explorer"
        isTitle={true}
      />
      <div>
        {list.map((item: Category) => (
          <CategoryTitle
            key={item.list_name}
            title={item.display_name}
            url={`list/${item.list_name_encoded}`}
          />
        ))}
      </div>
    </PageContainer>
  );
}

export const getStaticProps: GetStaticProps<{
  bestSellerCategoryList: CategoryList;
}> = async () => {
  try {
    const bestSellerCategoryList = await fetch(
      "https://books-api.nomadcoders.workers.dev/lists"
    ).then((res) => res.json());

    return {
      props: {
        bestSellerCategoryList,
      },
    };
  } catch (error) {
    return {
      props: {},
      notFound: true,
    };
  }
};
