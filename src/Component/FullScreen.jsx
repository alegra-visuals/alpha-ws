import { Expand } from 'lucide-react'
import { useState } from 'react'
import { Minimize } from 'lucide-react'

function FullScreen() {
    const [fullScreen,setFullScreen] = useState(false);
    const handleScreen = ()=>{
        if(!fullScreen){
            document.documentElement.requestFullscreen();
        }else{
            document.exitFullscreen();
        }
        setFullScreen(!fullScreen);
    }
  return (
    <>
     <div className='absolute right-5 top-5 z-50'>
          {fullScreen?<Minimize onClick={()=>{handleScreen()}}/>:<Expand onClick={()=>{handleScreen()}}/>}
        </div>
    
    </>
  )
}

export default FullScreen