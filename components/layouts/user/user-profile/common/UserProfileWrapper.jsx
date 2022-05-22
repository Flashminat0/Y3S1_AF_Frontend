import React from "react";
import { Button } from "@mui/material";

const UserProfileWrapper = ({ children }) => {
  return (
    <div className={"px-6 py-6"}>
      {children}
      <hr />
      <Button
        className={"mb-2 text-lg"}
        fullWidth={true}
        color={"success"}
        variant="outlined"
      >
        Change Role
      </Button>
      <Button
        className={"mb-2 text-lg"}
        fullWidth={true}
        color={"error"}
        variant="outlined"
      >
        Remove Member
      </Button>
    </div>
  );
};

export default UserProfileWrapper;
