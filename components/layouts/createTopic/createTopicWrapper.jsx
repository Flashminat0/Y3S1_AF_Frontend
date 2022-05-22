import React from 'react';
import {Button} from "@mui/material";

const CreateTopicWrapper = ({children}) =>{
  return(

    <div>
          <div className='uppercase text-3xl font-semibold flex justify-center mb-5'  >Add Topic</div>

          <div>
         
              <input className={"w-5/4 "}/>
          </div>
          <div>
          <Button className={" flex flex-d mb-2 text-lg"}  color={"success"} variant="outlined">+</Button>
          </div>

          <hr/>
          {children}

          
    </div>
  )
}
export default CreateTopicWrapper;


