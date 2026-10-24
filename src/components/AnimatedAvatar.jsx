
import { useEffect, useRef } from 'react'
import { useLoader } from '@react-three/fiber'
import { useAnimations } from '@react-three/drei'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'

export default function AnimatedAvatar() {
  const avatar = useLoader(FBXLoader, '/models/avatar.fbx')
  const avatarRef = useRef()

  const { actions, names } = useAnimations(
    avatar.animations,
    avatarRef
  )

  useEffect(() => {
    if (names.length > 0) {
      const firstAnimation = actions[names[0]]
      firstAnimation?.reset().fadeIn(0.4).play()

      return () => {
        firstAnimation?.fadeOut(0.3)
      }
    }
  }, [actions, names])

  useEffect(() => {
    avatar.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true
        child.receiveShadow = true
      }
    })
  }, [avatar])

  return (
    <primitive
      ref={avatarRef}
      object={avatar}
      scale={0.01}
      position={[0, -1.5, 0]}
    />
  )
}
