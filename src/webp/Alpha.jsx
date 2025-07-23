import { XR, createXRStore } from "@react-three/xr";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Html, OrbitControls, Environment } from "@react-three/drei";
import AlphaExperiance from "./AlphaExperiance";

// import { XRDevice, metaQuest3 } from "iwer";

// Initialize XRDevice with Meta Quest 3 configuration
// const xrDevice = new XRDevice(metaQuest3);
// xrDevice.installRuntime();

const store = createXRStore();

function Alpha() {
  return (
    <div className=" h-screen w-screen bg-transparent ">
      <Canvas orthographic>
        <ambientLight intensity={0.3} color="white" />
        <directionalLight position={[10, 10, 5]} intensity={0.5} />
        {/* <perspectiveCamera makeDefault position={[0,200, 100]} fov={75} /> */}
        <XR store={store}>
          <AlphaExperiance />
        </XR>
        <Html fullscreen>
          <div className="absolute bottom-0 w-full text-center p-4 bg-opacity-50 bg-gray-900">
            <div>
              <button
                onClick={() => {
                  store.enterVR();
                }}
                className="bg-white py-3 px-5 rounded-md mx-2 font-semibold text-gray-700 hover:text-white cursor-pointer hover:bg-gray-500"
              >
                Enter VR
              </button>
              <button
                onClick={() => {
                  store.enterAR();
                }}
                className="bg-white py-3 px-5 rounded-md mx-2 font-semibold text-gray-700 hover:text-white cursor-pointer hover:bg-gray-500"
              >
                Enter AR
              </button>
            </div>
            <h1 className="text-3xl text-white font-bold">Alpha XR</h1>
            <p className="text-white text-lg">
              Experience the future of web with Alpha XR
            </p>
          </div>
        </Html>
        {/* <OrbitControls></OrbitControls> */}
      </Canvas>
    </div>
  );
}

export default Alpha;
