import * as THREE from 'three'
import React, { useRef } from 'react'
import { useFrame } from 'react-three-fiber'

function Plank(props) {
  const defaultColor = '#aa8855'
  const mesh = useRef<THREE.Mesh>()
  return (
    <mesh
    {...props}
      ref={mesh}
      receiveShadow castShadow 
      >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color={props.color ?? defaultColor} />
    </mesh>
  )
}

export function Desk(props) {
  // This reference will give us direct access to the mesh
  const group = useRef<THREE.Mesh>()
  useFrame(() => (group.current.rotation.y += 0.004))
  const bookShelfScale = [0.1,0.8,0.6]
  const bookScale = [0.1,0.8,0.5]

  return (
    <group {...props} ref={group} scale={[1,1,1]}>
      <Plank position={[0, 0, 0]} scale={[3.8,0.1,2.2]} />
      <Plank position={[-1.8, -1, 1]} scale={[0.2,2,0.2]} />
      <Plank position={[1.8, -1, 1]} scale={[0.2,2,0.2]} />
      <Plank position={[-1.8, -1, -1]} scale={[0.2,2,0.2]} />
      <Plank position={[1.8, -1, -1]} scale={[0.2,2,0.2]} />

      <Plank position={[1.7, 0.4, -0.65]} scale={bookShelfScale} />
      <Plank position={[1, 0.4, -0.65]} scale={bookShelfScale} />
      <Plank position={[0.2, 0.4, -0.65]} scale={bookShelfScale} />

      <Plank position={[0.96, 0.4, -1]} scale={[1.6,0.8,0.1]} />

      <Plank color={"red"} position={[0.5, 0.4, -0.6]} scale={bookScale} />
      <Plank color={"blue"} position={[0.7, 0.4, -0.6]} scale={bookScale} />
      <Plank color={"green"} position={[1.26, 0.4, -0.6]} scale={bookScale} />
    </group>
  )
}

