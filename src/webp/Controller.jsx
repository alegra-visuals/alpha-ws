import { useEffect,useState } from "react"
import { io } from "socket.io-client"

function Controller() {
     const [socket,setSocket] = useState(null);
    useEffect(()=>{
        // const newsocket = io("http://127.0.0.1:8080/")
         const newsocket = io("https://13.232.76.15:8080/")
        newsocket.on("connect",()=>{
            console.log("connected");
            setSocket(newsocket);
            console.log(newsocket.id);
        })
        newsocket.on("message",(msg)=>{
            console.log(msg);
        })
        newsocket.on("disconnect", () => {
            setSocket(null);
            console.log(newsocket.id); // undefined
        });
        newsocket.on("connect_error",(err)=>{
            console.error('Socket.IO connection error:', err.message);
        })
        return ()=>{
            newsocket.disconnect();
        }
    },[])

    const sendCommand = (msg)=>{
        if(socket){

            socket.emit("message",msg);
        }
    }
    if (!socket) {
    return <div>Connecting to server...</div>;
  }
  return (
    <>
            <h1>Cube Controller</h1>
    <p>Tap a color to change the cube in VR</p>

    <div className="controls">
        <div className="color-button" style={{backgroundColor: '#ff453a'}} onClick={()=>{sendCommand('red')}}></div>
        <div className="color-button" style={{backgroundColor: '#ff9f0a'}} onClick={()=>{sendCommand('orange')}}></div>
        <div className="color-button" style={{backgroundColor: '#ffd60a'}} onClick={()=>{sendCommand('yellow')}}></div>
        <div className="color-button" style={{backgroundColor: '#32d74b'}} onClick={()=>{sendCommand('green')}}></div>
        <div className="color-button" style={{backgroundColor: '#64d2ff'}} onClick={()=>{sendCommand('skyblue')}}></div>
        <div className="color-button" style={{backgroundColor: '#0a84ff'}} onClick={()=>{sendCommand('blue')}}></div>
        <div className="color-button" style={{backgroundColor: '#bf5af2'}} onClick={()=>{sendCommand('purple')}}></div>
        <div className="color-button" style={{backgroundColor: '#ffffff'}} onClick={()=>{sendCommand('white')}}></div>
        <div className="color-button" style={{backgroundColor: '#8e8e93'}} onClick={()=>{sendCommand('gray')}}></div>
    </div>
      <p><button className="bg-white py-3 px-5 rounded-md mx-2 font-semibold text-gray-700 hover:text-white cursor-pointer hover:bg-gray-500" onClick={()=>{sendCommand('openTab')}}>Open Tab</button></p>
   
    </>
  )
}

export default Controller