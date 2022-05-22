import { Button } from "@mui/material";
import React from "react";

const AddedTopicBox = ({ TopicName}) => {
  return (
    //outer box
    <div className={"mx-10 my-10 py-10 rounded-lg shadow-md bg-gray-50"}>
      {/* inner part */}
      <div className={"flex flex-row items-center"}>{TopicName}</div>
      <div>
        <div>
          <Button>Edit</Button>
        </div>
        <div>
          <Button>Remove</Button>
        </div>
      </div>
    </div>
  );
};

export default AddedTopicBox;
