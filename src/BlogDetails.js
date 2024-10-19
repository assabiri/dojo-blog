import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";
import PageNotFound from "./PageNotFound";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    data: blog,
    isPending: isLoading,
    error,
  } = useFetch("http://localhost:8000/blogs/" + id);

  const HandleDelete = () => {
    fetch("http://localhost:8000/blogs/" + id, { method: "DELETE" });
    navigate("/");
  };

  return (
    <div className="blog-details">
      {isLoading && <>Loading ...</>}
      {!isLoading && error === "Failed to fetch" && (
        <div>Sorry network error</div>
      )}
      {!isLoading && blog && (
        <>
          <article>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
            <div>{blog.body}</div>
          </article>
          <button onClick={HandleDelete}>delete blog</button>
        </>
      )}
      {!isLoading && !blog && (
        <>
          <PageNotFound />
        </>
      )}
    </div>
  );
};

export default BlogDetails;
