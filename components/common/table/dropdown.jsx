import React from "react";

const dropdown = ({ role, setRole }) => {
  const type = [
    "admin",
    "Studnet",
    "Supervisor",
    "Co_Supervisor",
    "Panel_Member",
  ];
  // const selectRole = (type) => {
  //   console.log(type)
  // }
  return (
    <div>
      <select
        className="bg-green-100 border-0"
        name="role"
        id="role"
        onChange={(e) => {
          setRole(e.target.value);
        }}
      >
        {type.map((values, index) => (
          <option key={index} value={values}>
            {values}
          </option>
        ))}
      </select>
    </div>
  );
};

export default dropdown;
