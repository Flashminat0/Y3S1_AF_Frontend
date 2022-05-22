import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useLocalStorage } from "@mantine/hooks";
import axios from "axios";
import UserTable from '../common/table/userTable'

const AdminDashboard = () => {
  const router = useRouter();
  const [profileData, setProfileData] = useState({});
  const [userData, serUserData] = useState([{}]);
  const [credentials, setCredentials] = useLocalStorage({
    key: "y3s1-af-credentials",
    defaultValue: {},
  });
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:8000/api/userlist");
      serUserData(result.data.result);
    };
    fetchData();

    if (credentials.role !== "admin") {
      router.push("/");
    }
  }, [credentials.type]);
  return <div>
      <UserTable users={userData}/>
  </div>;
};

export default AdminDashboard;
