import * as React from "react";
import Introduction from "../components/introduction/introduction";
import Resume from "../components/resume/resume";

const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <Introduction />
      <Resume />
    </main>
  );
};

export default IndexPage;
