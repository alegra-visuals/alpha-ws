import { useEffect,useState } from "react";
import { io } from "socket.io-client"
import { Html } from "@react-three/drei";
function CubeExperiance() {
    const [msg,setMsg] = useState("orange");
    const [socket,setSocket] = useState(null);
       useEffect(()=>{
        //    const newsocket = io("http://127.0.0.1:8080/")
           const newsocket = io("https://api.alegravisuals.com/")
           newsocket.on("connect",()=>{
               console.log("connected");
            //    alert("right");
               setSocket(newsocket);
               console.log(newsocket.id);
           })
           newsocket.on("message",(msg)=>{
            //    console.log(msg);
            switch(msg){
                case "openTab":
                    console.log("openTab");
                    window.open("https://socket.io/","_blank")
                    break;
                default:
                    setMsg(msg);
            }
            //    setMsg(msg);
           })
           newsocket.on("disconnect", () => {
               setSocket(null);
               console.log(newsocket.id); // undefined
           });
           newsocket.on("connect_error",(err)=>{
               console.error('Socket.IO connection error:', err.message);
           })
           return ()=>{
            if(newsocket){

                newsocket.disconnect();
            }
           }
       },[])

  if (!socket) {
    return (
        <Html>
            <div>Connecting to server...</div>
        </Html>

    )
  }
  return (
    <>
    
        <mesh>
            <boxGeometry args={[1,1,1]} />
            <meshStandardMaterial color={msg} />
        </mesh>
    
    </>
  )
}

export default CubeExperiance