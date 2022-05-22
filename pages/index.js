import Link from "next/link";
import FileUploadTest from "../components/forms/FileUploadTest";
import LoginWIthMicrosoft from "../components/forms/auth/LoginWIthMicrosoft";
import Header from "../components/common/header";
import { useDocumentTitle } from "@mantine/hooks";
import Button from "@mui/material/Button";
import axios from "axios";

export default function Home() {
  useDocumentTitle("Home");

  const testAPI = () => {
    axios.get("/api/test").then((res) => {
      console.log(res);
    });
  };

  return (
    <div className={`font-sans`}>
      <Header />
      <Button onClick={testAPI} color={"primary"}>
        TEST
      </Button>

      <h1 className="text-3xl font-bold underline text-lg bg-red-100 text-red-500">
        Hello world!
      </h1>
      <FileUploadTest />
      <LoginWIthMicrosoft />
    </div>
  );
}
