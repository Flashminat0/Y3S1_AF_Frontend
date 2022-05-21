import React from "react";
import MemberAccept from "../../buttons/finalize-group/MemberAccept"
import MemberReject from "../../buttons/finalize-group/MemberReject"

const GroupContainer = ({ group }) => {
  console.log(group);
  return (
    <>
      {group.map((group) =>
        group.request.map((member) => (
          <div className="">
            <div className="bg-slate-100 h-16">
              <div className="grid grid-cols-3 justify-center items-center h-full">
                <div className="font-medium col-span-2">{member.name}</div>
                <div className="flex"><MemberAccept Name="Accept"/><MemberReject Name="Reject"/></div>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default GroupContainer;
