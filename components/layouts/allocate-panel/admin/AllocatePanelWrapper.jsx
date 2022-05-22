import React from "react";
import { Button } from "@mui/material";
import { MdGroups } from "react-icons/md";

const AllocatePanelWrapper = ({ children }) => {
  return (
    <div className={"px-6 py-6"}>
      <Button
        className={"mb-2 text-lg"}
        fullWidth={true}
        color={"success"}
        variant="outlined"
      >
        Allocate Panel
      </Button>
      <hr />
      <div className={"px-3 py-2 my-5 bg-gray-100 shadow rounded-lg"}>
        <div className={"flex flex-row justify-between items-center"}>
          <div className={"flex flex-col gap-4"}>
            <div>
              <div className={"uppercase text-2xl font-semibold"}>
                Research Topic
              </div>
              <div className={"text-blue-900"}>- Noobcooders -</div>
            </div>
            <div className={"flex flex-row gap-52 items-center"}>
              <div className={"flex flex-col"}>
                <div className={"flex flex-row gap-2 items-center"}>
                  <div className={"uppercase text-sm"}>Group Leader Name:</div>
                  <div className={"text-sm text-gray-500"}>John Smith</div>
                </div>
                <div className={"flex flex-row gap-2 items-center"}>
                  <div className={"uppercase text-sm"}>Reg Number:</div>
                  <div className={"text-sm text-gray-500"}>IT20227089</div>
                </div>
              </div>
              <div className={"flex flex-col"}>
                <div className={"uppercase text-sm"}>Member Details:</div>
                <div className={"flex flex-row gap-2"}>
                  <div className={"text-xs text-gray-500"}>
                    Anne Venroy (IT20453793),
                  </div>
                  <div className={"text-xs text-gray-500"}>
                    Martha Checkus (IT20216770),
                  </div>
                  <div className={"text-xs text-gray-500"}>
                    Nichola Shenel (IT20154052),
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={"pr-8"}>
            <MdGroups className={"w-24 h-24 text-gray-600"} />
          </div>
        </div>
      </div>
      {children}
      <Button
        className={"mb-2 text-lg"}
        fullWidth={true}
        color={"error"}
        variant="outlined"
      >
        Remove Group
      </Button>
    </div>
  );
};

export default AllocatePanelWrapper;
