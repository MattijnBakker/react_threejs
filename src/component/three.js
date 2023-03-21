import React,  {useRef, Suspense} from "react";
import {Canvas , useFrame, useLoader} from "react-three-fiber";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import '../scss/components/_three.scss';

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

function Modal(props) {
    const meshRef = useRef();
    const gltf = useLoader(GLTFLoader, "./logo/logo.glb");

    useFrame(() => {
        meshRef.current.rotation.y += 0.001;
    });

    return (
        <mesh ref={meshRef} {...props}>
            <primitive object={gltf.scene}/>
        </mesh>
    );
}

function Scene() {
  const controlsRef = useRef();

  return (
    <div className="canvaslogo">
      <Canvas camera={{ position: [90, 0, 5] }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Modal position={[0, 0, 0]} />
        <OrbitControls ref={controlsRef} />
      </Canvas>
    </div>
  );
}


export default Scene;