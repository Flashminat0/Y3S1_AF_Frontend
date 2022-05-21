import React from "react";
import GroupContainer from "./GroupContainer";
import FinalizeGroupButton from "../../buttons/finalize-group/FinalizeGroupButton";

const Container = () => {
  const group = [
    {
      Groupid: 1234,
      creator: 222,
      request: [
        { id: 1, name: "Name 1", group: 0 },
        { id: 2, name: "Kakula", groupid: 0 },
        { id: 3, name: "Kukula", groupid: 0 },
      ],
    },
  ];
  const member = [
    { id: 1, name: "Kakuli", groupid: 0 },
    { id: 2, name: "Kakula", groupid: 0 },
    { id: 3, name: "Kukula", groupid: 0 },
  ];
  return (
    <div className="space-y-5 bg-slate-500 h-full w-full">
      <div className="pt-10">
        <FinalizeGroupButton Name="Finalize Group Button" />
      </div>
      <GroupContainer group={group} />
    </div>
  );
};

export default Container;
