import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import CubeExperiance from './CubeExperiance'
import { OrbitControls } from '@react-three/drei'
import FullScreen from '../Component/FullScreen'
function Cube() {
  
  return (
   
    <div className='h-screen w-screen'>

       <FullScreen/>

        <Canvas>
            <OrbitControls />
            <ambientLight color="#00000" opacity="0.5"/>
            <directionalLight color="#ffffff" position={[5,5,5]}/>
            {/* <Environment preset="city" /> */}
            <Suspense fallback={null}>
                <CubeExperiance />
            </Suspense>
        </Canvas>
        </div>
   
  )
}

export default Cube