import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div>
      <Image
        src={
          "https://firebasestorage.googleapis.com/v0/b/y3s1-sliit-af.appspot.com/o/Logo%20AF.png?alt=media&token=128d14ab-d90c-4aa2-b021-4c46859ce9aa"
        }
        width={250}
        height={200}
        alt="logo"
      />
    </div>
  );
};

export default Header;
