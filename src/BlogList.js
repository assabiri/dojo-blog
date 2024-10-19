import { Link } from "react-router-dom";

const BlogList = ({ blogs, title, isLoading, error }) => {
  console.log(error);

  return (
    <>
      {isLoading && <>Loading ...</>}
      {!isLoading && (
        <>
          <h1>{title}</h1>
          {blogs?.map((blog) => (
            <div className="blog-preview" key={blog.id}>
              <Link to={`${blog.id}`}>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
              </Link>
            </div>
          ))}
        </>
      )}
      {!isLoading && error === "Failed to fetch" && (
        <div>Sorry network error</div>
      )}
    </>
  );
};

export default BlogList;
