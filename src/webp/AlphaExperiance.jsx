import { Environment, useVideoTexture } from "@react-three/drei";
// import { useAspect } from "@react-three/drei";
import { useTexture } from "@react-three/drei";
import { Suspense } from "react";

import { XRLayer } from "@react-three/xr";
// import { useMemo } from "react";

function AlphaExperiance() {
  // const aspect = useAspect(400, 460);

  const videoTexture = useVideoTexture("/video3.webm", {
    muted: true,
    start: true,
    loop: true,
    autoplay: true,
    crossOrigin: "anonymous",
  });
  // const videoLoad = useMemo(() => {
  //   const result = document.createElement("video");
  //   result.src = "/video3.webm";
  //   result.muted = true;
  //   result.autoplay = true;
  //   result.loop = true;
  //   result.crossOrigin = "anonymous";
  //   result.play();

  //   return result;
  // }, []);
  return (
    <>
      <Suspense fallback={<Fallbackvideo url="/10.jpg" />}>
        {/* <mesh scale={aspect} position={[0, 100, 0]}>
          <planeGeometry args={[1.6, 0.9]} />
          <meshBasicMaterial
            map={videoTexture}
            transparent={true}
            toneMapped={false}
          />
        </mesh> */}

      <mesh position={[0, 100, -700]} scale={910}>
          <planeGeometry args={[1.6, 0.9]} />
          <meshBasicMaterial
            map={videoTexture}
            transparent={true}
            toneMapped={false}
          />
        </mesh>

        {/* <XRLayer
          position={[0, 1.5, -1.5]}
          onClick={() => videoLoad.play()}
          scale={1.6}
          src={videoLoad}
        /> */}
      </Suspense>
    </>
  );
}
function Fallbackvideo(url) {
  const texture = useTexture(url);
  return <meshBasicMaterial map={texture} toneMapped={false} />;
}
export default AlphaExperiance;
