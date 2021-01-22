import { CONST_SITE_NAME } from '../options/constants'

import { Canvas } from 'react-three-fiber'
import { Desk } from '../three/desk'
import Layout from '../components/layout'
import Head from 'next/head'

import Container from '../components/container'

import { User, UserApi } from '@services/index.ts'
import { GetStaticProps } from 'next'

type HomeProps = {
  allUsers: User[]
}


export default function Home({ allUsers }: HomeProps) {
  const d = 30.25

  return (
    <Layout allUsers={allUsers}>
      <Head>
        <title>{CONST_SITE_NAME}</title>
      </Head>

    
      <Canvas className="w-full" colorManagement shadowMap camera={{ position: [0, 3, 5], fov: 60 }}>
        <fog attach="fog" args={["white", 0, 40]} />
        <ambientLight intensity={0.4} />
        <directionalLight
          castShadow
          position={[2.5, 8, 5]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <pointLight position={[0, -10, 0]} intensity={1.5} />
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]} receiveShadow>
          <planeBufferGeometry attach="geometry" args={[100, 100]} />
          <shadowMaterial attach="material" transparent opacity={0.4} />
        </mesh>

        <Desk position={[0, 1.5, 0]} />
      </Canvas>
    </Layout >
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const api = new UserApi();
  const allUsers = (await api.fetchUserEntries()) ?? []
  return {
    props: { allUsers },
  };
}