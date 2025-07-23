import React, { Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, Environment, Html } from '@react-three/drei'
import { useEffect } from 'react'
import { useAnimations } from '@react-three/drei'
import { useNavigate } from 'react-router-dom'
function AnimatedCharacter() {
  const { scene, animations } = useGLTF('/model.glb')
  const { actions } = useAnimations(animations, scene)

  useEffect(() => {
    actions[Object.keys(actions)[0]]?.play()
  }, [actions])

  return <primitive object={scene} scale={1.2} position={[0, -1, 0]} />
}

export default function App() {
  const navigate = useNavigate();
  return (
    <div className="relative h-screen w-screen bg-gray-500 text-white">
      {/* Overlay Text */}
      <div className="absolute z-10 bottom-1/6 left-1/2 transform -translate-x-1/2 text-center">
        <h1 className="text-5xl font-bold mb-4">Meet Our Hero</h1>
        <p className="text-xl text-gray-300 mb-6">A fully animated 3D character greeting your users</p>
        <button className="px-6 py-3 my-3 bg-white text-black font-semibold rounded-md shadow hover:bg-gray-200 transition">
          Explore More
        </button> <button onClick={()=>navigate("/alpha")} className="px-6 py-3 mx-2 bg-white text-black font-semibold rounded-md shadow hover:bg-gray-200 transition">
          alpha XR
        </button>
        <button onClick={()=>navigate("/cube")} className="px-6 py-3 bg-white text-black font-semibold rounded-md shadow hover:bg-gray-200 transition">
          cube
        </button>
      </div>

      {/* 3D Canvas */}
      <Canvas camera={{ position: [0, 1, 4], fov: 50 }} className='bg-transparent'>
        <ambientLight intensity={0.3} color="white" />
        <directionalLight position={[10, 10, 5]} intensity={0.5} />
        <Suspense fallback={null}>
          <Environment preset="city" />
         
          <AnimatedCharacter />

          <OrbitControls enableZoom={false} />
        </Suspense>
      </Canvas>
    </div>
  )
}
