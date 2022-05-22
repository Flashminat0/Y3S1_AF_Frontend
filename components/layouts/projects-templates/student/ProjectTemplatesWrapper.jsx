import React from "react";
import { Button } from "@mui/material";

const ProjectTemplatesWrapper = ({ children }) => {
  return (
    <div className={"px-6 py-6"}>
      <div
        className={"flex capitalize text-4xl font-semibold justify-center mb-5"}
      >
        Project Templates
      </div>
      <hr />
      {children}
      <Button
        className={"mb-2 text-lg"}
        fullWidth={true}
        color={"warning"}
        variant="outlined"
      >
        Download Templates
      </Button>
    </div>
  );
};

export default ProjectTemplatesWrapper;
