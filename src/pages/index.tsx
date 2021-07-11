import React from "react";
import { PageProps } from "gatsby";
import { NetworkDiagnostics } from "../components/NetworkDiagnostics";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <React.Fragment>
      <h1>Homepage</h1>
      <NetworkDiagnostics />
    </React.Fragment>
  );
};

export default IndexPage;
