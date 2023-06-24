import { GetServerSideProps } from "next";
import BookDetailCard from "../../components/BookDetailCard";
import BooksContainer from "../../components/BooksContainer";
import PageContainer from "../../components/PageContainer";
import PageTitle from "../../components/PageTitle";

interface CategoryBookList {}

export default function BookDetail({ categoryBookList }) {
  const books = categoryBookList.results.books;
  return (
    <PageContainer>
      <PageTitle title={categoryBookList.results.display_name} />
      <BooksContainer>
        {books.map((item) => (
          <BookDetailCard
            key={item.rank + item.title}
            imgUrl={item.book_image}
            shopUrl={item.amazon_product_url}
            title={item.title}
            author={item.author}
          />
        ))}
      </BooksContainer>
    </PageContainer>
  );
}

export const getServerSideProps: GetServerSideProps<{
  categoryBookList: CategoryBookList;
}> = async (context) => {
  const { id } = context.query;
  const categoryBookList = await fetch(
    `https://books-api.nomadcoders.workers.dev/list?name=${id}`
  ).then((res) => res.json());

  if (categoryBookList.error) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      categoryBookList,
    },
  };
};
