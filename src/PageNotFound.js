import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <h2>sorry.</h2>
      <p>we couldn't found page</p>
      <Link to={"/"}>back to the home page</Link>
    </>
  );
};

export default PageNotFound;
