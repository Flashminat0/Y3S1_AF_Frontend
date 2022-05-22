import React from "react";
import { Button } from "@mui/material";
import { BsPersonBoundingBox } from "react-icons/bs";

const FinalizeGroupWrapper = ({ children }) => {
  return (
    <div className={"px-6 py-6"}>
      <Button
        className={"mb-2 text-lg"}
        fullWidth={true}
        color={"success"}
        variant="outlined"
      >
        Finalize Group
      </Button>
      <hr />
      <div className={"px-3 py-2 mt-5 bg-gray-100 shadow rounded-lg"}>
        <div className={"flex flex-row justify-between items-center"}>
          <div className={"flex flex-col gap-1"}>
            <p className={"uppercase text-lg font-semibold"}>Group Leader</p>
            <div className={"flex flex-row gap-2 items-center"}>
              <div className={"uppercase text-base"}>Name:</div>
              <div className={"text-sm text-gray-500"}>John Smith</div>
            </div>
            <div className={"flex flex-row gap-2 items-center"}>
              <div className={"uppercase text-base"}>Registered Number:</div>
              <div className={"text-sm text-gray-500"}>IT20227089</div>
            </div>
          </div>
          <div className={"pr-8"}>
            <BsPersonBoundingBox className={"w-24 h-24 text-gray-600"} />
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default FinalizeGroupWrapper;
