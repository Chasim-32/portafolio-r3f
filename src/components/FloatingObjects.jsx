
import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'

function FloatingCube({ position, color, size = 0.45 }) {
  const meshRef = useRef()
  const [active, setActive] = useState(false)
  const [hovered, setHovered] = useState(false)

  useFrame((state, delta) => {
    if (!meshRef.current) return

    meshRef.current.rotation.x += delta * 0.25
    meshRef.current.rotation.y += delta * 0.4

    meshRef.current.position.y =
      position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.12

    const targetScale = active ? 1.35 : hovered ? 1.15 : 1
    meshRef.current.scale.setScalar(targetScale)
  })

  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerOver={(event) => {
        event.stopPropagation()
        setHovered(true)
        document.body.style.cursor = 'pointer'
      }}
      onPointerOut={() => {
        setHovered(false)
        document.body.style.cursor = 'auto'
      }}
      onClick={() => setActive((previous) => !previous)}
    >
      <boxGeometry args={[size, size, size]} />
      <meshStandardMaterial
        color={active ? '#D99B45' : hovered ? '#7EAA8B' : color}
        roughness={0.35}
        metalness={0.15}
      />
    </mesh>
  )
}

export default function FloatingObjects() {
  return (
    <group>
      <FloatingCube position={[-1.7, 1.1, 0]} color="#83A98C" />
      <FloatingCube position={[1.8, 0.1, -0.5]} color="#D9C7A0" size={0.3} />
      <FloatingCube position={[-1.4, -1.1, -0.4]} color="#A8BCA8" size={0.25} />
    </group>
  )
}
