import React from 'react'
import {motion} from "framer-motion";

const OkIcon = () => {
    return (
        <motion.div
            initial={{opacity: 0, y: -20, scale: 1}}
            animate={{opacity: 1, y: [0, 5, -5, 5, -5, 0]}}
            transition={{delay: 0.5, duration: 0.5}}
        >
            <img
                src="https://img.icons8.com/color/480/000000/ok--v1.png"
                alt={'ok_icon'}
                className={``}
                height={'100rem'}
            />
        </motion.div>
    )
}

export default OkIcon
