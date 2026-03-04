import * as THREE from 'three';
import {useEffect, useRef, useState} from 'react';
import type {MutableRefObject, PointerEventHandler} from 'react';
import {Canvas, GroupProps, MeshProps, ThreeEvent, useFrame} from '@react-three/fiber';
import {Environment, Image} from '@react-three/drei';
import {easing} from 'maath';
import projects, {ProjectType} from '../../projects.ts';
import '../../util';

export default function PortfolioCarousel() {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  const isDragging = useRef(false);
  const lastX = useRef(0);
  const velocity = useRef(0);
  const targetRotation = useRef(0);

  const onPointerDown: PointerEventHandler<HTMLDivElement> = (event) => {
    isDragging.current = true;
    lastX.current = event.clientX;
  };

  const onPointerMove: PointerEventHandler<HTMLDivElement> = (event) => {
    if (!isDragging.current) {
      return;
    }
    const deltaX = event.clientX - lastX.current;
    lastX.current = event.clientX;
    targetRotation.current += deltaX * 0.0045;
    velocity.current = deltaX * 0.0003;
  };

  const onPointerUp: PointerEventHandler<HTMLDivElement> = (event) => {
    isDragging.current = false;
  };

  useEffect(() => {
    const urls = projects.map((project) => project.images[0] || project.thumbnail);
    urls.forEach((url) => {
      const image = new window.Image();
      image.src = url;
    });
  }, []);

  return (
    <div className={'portfolio-carousel'} onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={onPointerUp} onPointerCancel={onPointerUp} onPointerLeave={onPointerUp}>
      <Canvas camera={{position: [0, 0, 100], fov: 15}}>
        <fog attach="fog" args={['#a79', 8.5, 12]}/>
        <Rig dragState={{isDragging, velocity, targetRotation}} rotation={[0, 0, 0.15]}>
          <Carousel projects={projects} onSelect={setSelectedProject}/>
        </Rig>
        <Environment preset="dawn" background={false} blur={0.5}/>
      </Canvas>
      {selectedProject && (
        <div className={'portfolio-modal'} onClick={() => setSelectedProject(null)}>
          <div className={'portfolio-modal__card'} onClick={(event) => event.stopPropagation()}>
            <button className={'portfolio-modal__close'} onClick={() => setSelectedProject(null)}>×</button>
            <img src={selectedProject.images[0] || selectedProject.thumbnail} alt={selectedProject.name} className={'portfolio-modal__image'}/>
            <h4>{selectedProject.name}</h4>
            <p className={'portfolio-modal__role'}>{selectedProject.role}</p>
            <p className={'portfolio-modal__description'}>{selectedProject.description}</p>
            {selectedProject.link && (
              <a className={'portfolio-modal__link'} href={selectedProject.link} target={'_blank'}>
                Bekijk project
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

type DragState = {
  isDragging: MutableRefObject<boolean>;
  velocity: MutableRefObject<number>;
  targetRotation: MutableRefObject<number>;
};

type RigProps = GroupProps & {
  dragState: DragState;
};

function Rig({dragState, ...props}: RigProps) {
  const ref = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!ref.current) {
      return;
    }
    if (!dragState.isDragging.current) {
      dragState.targetRotation.current += dragState.velocity.current;
      dragState.velocity.current *= 0.95;
    }
    ref.current.rotation.y = THREE.MathUtils.damp(ref.current.rotation.y, dragState.targetRotation.current, 8, delta);
    state.events.update();
    easing.damp3(state.camera.position, [-state.pointer.x * 0.9, state.pointer.y * 0.5 + 1.35, 10], 0.3, delta);
    state.camera.lookAt(0, 0, 0);
  });

  return <group ref={ref} {...props}/>;
}

type CarouselProps = {
  radius?: number;
  projects: ProjectType[];
  onSelect: (project: ProjectType) => void;
};

function Carousel({radius = 2.05, projects: items, onSelect}: CarouselProps) {
  return (
    <>
      {items.map((project: ProjectType, index: number) => {
        const angle = (index / items.length) * Math.PI * 2;
        return (
          <Card
            key={`${project.slug}-${index}`}
            project={project}
            onSelect={onSelect}
            position={[Math.sin(angle) * radius, 0, Math.cos(angle) * radius]}
            rotation={[0, angle, 0]}
          />
        );
      })}
    </>
  );
}

type CardProps = {
  project: ProjectType;
  onSelect: (project: ProjectType) => void;
} & MeshProps;

function Card({project, onSelect, ...props}: CardProps) {
  const ref = useRef<any>(null);
  const [hovered, hover] = useState(false);
  const baseScale = 1.25;

  const pointerOver = (event: ThreeEvent<PointerEvent>) => {
    event.stopPropagation();
    hover(true);
  };

  const pointerOut = () => hover(false);
  const onClick = (event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
    if (event.delta <= 2) {
      onSelect(project);
    }
  };

  useFrame((_state, delta) => {
    if (!ref.current) {
      return;
    }
    const scale = hovered ? baseScale * 1.08 : baseScale;
    easing.damp3(ref.current.scale, [scale, scale, scale], 0.1, delta);
    easing.damp(ref.current.material, 'radius', hovered ? 0.25 : 0.1, 0.2, delta);
    easing.damp(ref.current.material, 'zoom', hovered ? 1 : 1.25, 0.2, delta);
  });

  return (
    <Image
      ref={ref}
      url={project.thumbnail}
      transparent
      side={THREE.DoubleSide}
      onPointerOver={pointerOver}
      onPointerOut={pointerOut}
      onClick={onClick}
      {...props}
    >
      <bentPlaneGeometry args={[0.1, 1, 1, 20, 20]}/>
    </Image>
  );
}
