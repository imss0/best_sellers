import { GetServerSideProps } from "next";
import BookDetailCard from "../../components/BookDetailCard";
import GridContainer from "../../components/GridContainer";
import PageContainer from "../../components/PageContainer";
import PageTitle from "../../components/PageTitle";
import { CategoryBookList, Book } from "../../interfaces";

export default function BookDetail({ categoryBookList }) {
  const books = categoryBookList.results.books;
  return (
    <PageContainer>
      <PageTitle
        title={categoryBookList.results.display_name}
        isTitle={false}
      />
      <GridContainer>
        {books.map((item: Book) => (
          <BookDetailCard
            key={item.rank + item.title}
            imgUrl={item.book_image}
            shopUrl={item.amazon_product_url}
            title={item.title}
            currentRank={item.rank}
            lastRank={item.rank_last_week}
            author={item.author}
          />
        ))}
      </GridContainer>
    </PageContainer>
  );
}

export const getServerSideProps: GetServerSideProps<{
  categoryBookList: CategoryBookList;
}> = async (context) => {
  try {
    const { id } = context.query;
    const categoryBookList = await fetch(
      `https://books-api.nomadcoders.workers.dev/list?name=${id}`
    ).then((res) => res.json());

    return {
      props: {
        categoryBookList,
      },
    };
  } catch (error) {
    return {
      props: {},
      notFound: true,
    };
  }
};
