
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import FloatingObjects from './FloatingObjects'
import AnimatedAvatar from './AnimatedAvatar'

function SceneContent() {
  return (
    <>
      <ambientLight intensity={1.5} />

      <directionalLight
        position={[4, 5, 5]}
        intensity={2}
      />

      <pointLight
        position={[-3, 1, 3]}
        intensity={1}
        color="#D9E8D7"
      />

      <Suspense fallback={null}>
        <AnimatedAvatar />
        <FloatingObjects />
      </Suspense>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 2.7}
        maxPolarAngle={Math.PI / 1.7}
        minAzimuthAngle={-0.45}
        maxAzimuthAngle={0.45}
      />
    </>
  )
}

export default function Scene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <SceneContent />
    </Canvas>
  )
}
