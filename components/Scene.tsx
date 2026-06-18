"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

// 1. Vertex Shader (Smooth, gentle breathing)
const vertexShader = `
  varying vec2 vUv;
  uniform float uTime;

  void main() {
    vUv = uv;
    vec3 pos = position;
    float pulse = sin(pos.y * 3.0 + uTime * 1.5) * 0.08;
    pos += normal * pulse;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

// 2. Fragment Shader (Pearl and Rose Pink flow)
const fragmentShader = `
  uniform float uTime;
  varying vec2 vUv;

  void main() {
    float flow = sin(vUv.y * 6.0 + uTime * 2.0) * 0.5 + 0.5;
    
    // Premium Aesthetic Palette
    vec3 pearlWhite = vec3(1.0, 0.97, 0.98); 
    vec3 blushPink = vec3(0.96, 0.55, 0.68); 
    
    vec3 finalColor = mix(pearlWhite, blushPink, flow);
    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

function AbstractShape() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.1;
      meshRef.current.rotation.y += delta * 0.15;
    }
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
      <mesh ref={meshRef} scale={2.2}>
        {/* Smoother geometry for a liquid look */}
        <torusKnotGeometry args={[1, 0.35, 256, 64]} />
        <shaderMaterial
          ref={materialRef}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={{ uTime: { value: 0 } }}
          wireframe={false} // Turned OFF for a solid, glossy liquid look
        />
      </mesh>
    </Float>
  );
}

export default function Scene() {
  return (
    // Opacity turned up to make the pink pop against the white background
    <div className="absolute inset-0 z-0 h-full w-full pointer-events-none opacity-80">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <AbstractShape />
      </Canvas>
    </div>
  );
}