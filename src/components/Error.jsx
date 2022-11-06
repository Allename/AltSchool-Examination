import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="error">
      <h1>Oops!!</h1>
      <p>Sorry, an unexpected error has occured</p>
      <p className="error-message">
        <i>{`${error.statusText} | ${error.status}`}</i>
      </p>
    </div>
  );
}

export default Error;