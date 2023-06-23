import { GetServerSideProps } from "next";
import BookDetailCard from "../../components/BookDetailCard";

interface CategoryBookList {}

export default function BookDetail({ categoryBookList }) {
  const books = categoryBookList.results.books;
  return (
    <>
      <h2>{categoryBookList.results.display_name}</h2>
      {books.map((item) => (
        <BookDetailCard
          key={item.rank + item.title}
          imgUrl={item.book_image}
          shopUrl={item.amazon_product_url}
          title={item.title}
          author={item.author}
        />
      ))}
    </>
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
