import React from "react";
import OkIcon from "./visuals/OkIcon";
import CrossIcon from "./visuals/CrossIcon";
import OngoingIcon from "./visuals/OngoingIcon";

const SupervisorApproval = ({ status }) => {
  return (
    <div className={`grow h-full w-max`}>
      <>
        <div className="min-h-full pt-16 pb-12 flex flex-col bg-white">
          <main className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex-shrink-0 flex justify-center">
              {status === "approved" && <OkIcon />}
              {status === "rejected" && <CrossIcon />}
              {status === "pending" && <OngoingIcon />}
            </div>
            <div className="py-16">
              <div className="text-center">
                <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
                  {status === "approved" && "Approved by a Supervisor"}
                  {status === "rejected" && "Rejected by Supervisors"}
                  {status === "pending" && "Pending Approval by a Supervisor"}
                </p>
                <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                  {status === "approved" && "You can continue to work"}
                  {status === "rejected" && "Please select a different topic"}
                  {status === "pending" &&
                    "Talk to your Supervisor for approval"}
                </h1>
                <p className="mt-2 text-base text-gray-500">
                  {status === "approved" && "Good luck! from SLIIT"}
                  {status === "rejected" &&
                    "Contact SLIIT help desk for further assistance."}
                </p>
              </div>
            </div>
          </main>
        </div>
      </>
    </div>
  );
};

export default SupervisorApproval;
