import React from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection/CommonSection";

const NotFound = () => {
  return (
    <Helmet title="Not Found">
      <CommonSection title="Are you lost?" />
    </Helmet>
  );
};

export default NotFound;
