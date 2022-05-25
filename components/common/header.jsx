import React from 'react'
import Image from 'next/image'

const Header = () => {
    return (
        <div>
            <Image
                src={
                    'https://firebasestorage.googleapis.com/v0/b/y3s1-sliit-af.appspot.com/o/Logo%20AF.png?alt=media&token=2abbb496-a605-40b9-8266-4fc5b4ae1cce'
                }
                width={250}
                height={200}
                alt="logo"
            />
        </div>
    )
}

export default Header
