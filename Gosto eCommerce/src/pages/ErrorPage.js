import React from "react"


function ErrorPage() {

  return (
    <div className="error-page d-flex">
      <img src={require('../assets/images/404.jpg')} alt="404" width="80%" className="mx-auto"/>
    </div>
  );
}

export default ErrorPage;
