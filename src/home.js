import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");
  return (
    <>
      {
        <BlogList
          blogs={blogs}
          title={"All blogs"}
          isLoading={isPending}
          error={error}
        />
      }
    </>
  );
};

export default Home;
