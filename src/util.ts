import * as THREE from 'three';
import {extend, MaterialNode, Object3DNode} from '@react-three/fiber';
import {shaderMaterial} from '@react-three/drei';

class BentPlaneGeometry extends THREE.PlaneGeometry {
  constructor(curve = 0.1, width = 1, height = 1, widthSegments = 1, heightSegments = 1) {
    super(width, height, widthSegments, heightSegments);

    const position = this.attributes.position as THREE.BufferAttribute;
    const vertex = new THREE.Vector3();

    for (let index = 0; index < position.count; index++) {
      vertex.fromBufferAttribute(position, index);
      const normalizedX = vertex.x / width;
      const bentZ = Math.sin(normalizedX * Math.PI) * curve;
      position.setZ(index, bentZ);
    }

    position.needsUpdate = true;
    this.computeVertexNormals();
  }
}

const MeshSineMaterial = shaderMaterial(
  {
    map: null,
    time: 0,
    radius: 0.1,
    zoom: 1.5
  },
  /* glsl */ `
    varying vec2 vUv;
    uniform float time;
    uniform float radius;
    uniform float zoom;

    void main() {
      vUv = uv;
      vec3 transformed = position;
      transformed.z += sin((uv.x + time * 0.2) * 6.2831) * radius * 0.12;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
    }
  `,
  /* glsl */ `
    varying vec2 vUv;
    uniform sampler2D map;
    uniform float zoom;

    void main() {
      vec2 centeredUv = (vUv - 0.5) / zoom + 0.5;
      vec4 tex = texture2D(map, centeredUv);
      gl_FragColor = tex;
    }
  `
);

extend({BentPlaneGeometry, MeshSineMaterial});

declare module '@react-three/fiber' {
  interface ThreeElements {
    bentPlaneGeometry: Object3DNode<BentPlaneGeometry, typeof BentPlaneGeometry>;
    meshSineMaterial: MaterialNode<THREE.ShaderMaterial, typeof MeshSineMaterial>;
  }
}
