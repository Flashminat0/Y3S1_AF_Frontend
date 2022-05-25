import { Button } from "@mui/material";
import React from "react"



const AddedTopicBox = ({ TopicName, GrpID}) => {
  return (
    //outer box
    <div className={"mx-10 my-10 py-10 rounded-lg shadow-md bg-gray-50"}>
      {/* inner part */}
      <div className="grid grid-cols-2">
      <div className={"flex flex-col ml-5"}>
      <div >{TopicName}</div>
      <div>Group ID: {GrpID}</div>
      </div>
    
      
        <div className="ml-auto mr-4">
          <Button className="text-center text-black text-xl font-semibold h-10  bg-red-500 rounded-lg">Remove</Button>
        </div>
        
       
      </div>
    </div>
  );
};

export default AddedTopicBox;
