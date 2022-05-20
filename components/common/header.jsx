import React from 'react';
import Image from "next/image";

const Header = () => {
    return (
        <div>
            <Image
                src={"https://firebasestorage.googleapis.com/v0/b/y3s1-sliit-af.appspot.com/o/icon.png?alt=media&token=196139b7-7ab9-4236-a168-e71dcefe2f83"}
                width={180}
                height={100}
                alt="logo"/>
        </div>
    );
};

export default Header;
