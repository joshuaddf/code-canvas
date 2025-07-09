"use client"
import { Canvas, useFrame } from "@react-three/fiber"
import { useRef, useEffect } from "react"
import { fragmentShader, vertexShader } from "@/shader/Shader"
import { IUniform } from "three"
import { useControls } from 'leva'
import { useAspect, useTexture } from "@react-three/drei"

const Cube = () => {
  const { amplitude, waveLength } = useControls({
    amplitude: { value: 0.5, min: 0, max: 5.0, step: 0.1 },
    waveLength: { value: 1.5, min: 0, max: 25.0, step: 0.1 }
  })

  const mesh = useRef(null)
  const texture = useTexture("/kane.png")
  const { width, height } = texture.image;
  const scale = useAspect(width, height, .4);
  
  const uniforms = useRef<{ [key: string]: IUniform }>({
    uTexture: {  value: texture },
    uAmplitude: { value: amplitude },
    uWaveLength: { value: waveLength },
    uTime: { value: 1.5 }
  });

  useEffect(() => {
    uniforms.current.uAmplitude.value = amplitude;
    uniforms.current.uWaveLength.value = waveLength;
  }, [amplitude, waveLength]);

  useFrame(({ clock }) => {
    uniforms.current.uTime.value = clock.getElapsedTime()
  })

  return (
    <mesh ref={mesh} scale={scale}>
      <planeGeometry args={[1, 1, 15, 15]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms.current} />
    </mesh>
  )
}

const Scene = () => {
  return (
    <Canvas className="w-screen h-screen">
      <Cube />
    </Canvas>
  )
}

export default Scene