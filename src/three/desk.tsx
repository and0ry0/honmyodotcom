import * as THREE from 'three'
import React, { useRef, useState } from 'react'
import { useFrame } from 'react-three-fiber'

function Plank(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef<THREE.Mesh>()

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  return (
    <mesh
    {...props}
      ref={mesh}
      receiveShadow castShadow 
      onClick={e => setActive(!active)}
      // onPointerOver={e => setHover(true)}
      // onPointerOut={e => setHover(false)}
      >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color={'#aa8855'} />
    </mesh>
  )
}

export function Desk(props) {
  // This reference will give us direct access to the mesh
  const group = useRef<THREE.Mesh>()

  return (
    <group ref={group} scale={[1,1,1]}>
      <Plank position={[0, 0, 0]} scale={[5,0.1,3]} />
    </group>
  )
}

