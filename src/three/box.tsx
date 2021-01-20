import * as THREE from 'three'
import React, { useRef, useState } from 'react'
import { useFrame } from 'react-three-fiber'

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef<THREE.Mesh>()

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  return (
    <mesh
    {...props}
      ref={mesh}
      scale={active ? [1, 4, 1] : [1, 2, 1]}
      onClick={e => setActive(!active)}
      onPointerOver={e => setHover(true)}
      onPointerOut={e => setHover(false)}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color={hovered ? '#ff6600' : '#800000'} />
    </mesh>
  )
}

export function Boxes(props) {
  // This reference will give us direct access to the mesh
  const group = useRef<THREE.Mesh>()

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (group.current.rotation.x = group.current.rotation.y += 0.005))

  return (
    <group ref={group} scale={[1,1,1]}>
      <Box position={[-1, 0, -1]} />
      <Box position={[0, 0, -1]} />
      <Box position={[1, 0, -1]} />
      <Box position={[-1, 0, 0]} />
      <Box position={[1, 0, 0]} />
      <Box position={[-1, 0, 1]} />
      <Box position={[0, 0, 1]} />
      <Box position={[1, 0, 1]} />
    </group>
  )
}

