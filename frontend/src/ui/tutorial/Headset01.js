/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, {useEffect, useRef, useState} from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import headset from './headset01.glb'
import {useResponsive3d} from "../../customHooks/useResponsive3d";

export default function Headset(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(headset)
  const { actions } = useAnimations(animations, group)

  //sets finger movement
  const [action, setAction] = useState("headsetMove")

  useEffect(() => {
    actions[action].reset().fadeIn(0.5).play()
    // setMouseButtonColor("#a0e734")
    return () => actions[action].fadeOut(0.5)
  }, [actions, action]);

  const {headsetVisible} = useResponsive3d()

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="RootNode_(gltf_orientation_matrix)"
             // rotation={[-Math.PI / 2, 0, 0]}
      >
        <group
            // position={[-4.38, -3.05, -2.58]}
            visible = {headsetVisible}
        >
          <mesh geometry={nodes.Mesh_0.geometry} material={materials.base} />
          <mesh geometry={nodes.Mesh_1.geometry} material={materials.checker} />
          <mesh geometry={nodes.Mesh_2.geometry} material={materials.checker2} />
          <mesh geometry={nodes.Mesh_3.geometry} material={materials.dots} />
          <mesh geometry={nodes.Mesh_4.geometry} material={materials.foam} />
          <mesh geometry={nodes.Mesh_5.geometry} material={materials.logo} />
          <mesh geometry={nodes.Mesh_6.geometry} material={materials.screen} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload(headset)