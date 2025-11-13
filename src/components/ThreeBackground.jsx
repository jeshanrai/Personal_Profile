import { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeBackground = ({ mousePosition }) => {
  const threeCanvasRef = useRef(null);
  const meshRef = useRef(null);

  useEffect(() => {
    const canvas = threeCanvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    const geometry = new THREE.IcosahedronGeometry(2, 1);
    const edges = new THREE.EdgesGeometry(geometry);
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x22d3ee, transparent: true, opacity: 0.6 });
    const wireframe = new THREE.LineSegments(edges, lineMaterial);

    const material = new THREE.MeshPhongMaterial({ color: 0x06b6d4, transparent: true, opacity: 0.3, shininess: 100, specular: 0x22d3ee });
    const mesh = new THREE.Mesh(geometry, material);

    const group = new THREE.Group();
    group.add(mesh);
    group.add(wireframe);
    scene.add(group);
    meshRef.current = group;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const pointLight1 = new THREE.PointLight(0x22d3ee, 1);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);
    const pointLight2 = new THREE.PointLight(0x14b8a6, 1);
    pointLight2.position.set(-5, -5, 5);
    scene.add(pointLight2);

    let animationId;
    const animateThree = () => {
      animationId = requestAnimationFrame(animateThree);
      if (meshRef.current) {
        meshRef.current.rotation.x += 0.005;
        meshRef.current.rotation.y += 0.005;
      }
      renderer.render(scene, camera);
    };
    animateThree();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
      geometry.dispose();
      material.dispose();
      lineMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  // Mouse rotation
  useEffect(() => {
    if (meshRef.current) {
      const targetX = mousePosition.y * 0.5;
      const targetY = mousePosition.x * 0.5;
      meshRef.current.rotation.x += (targetX - meshRef.current.rotation.x) * 0.05;
      meshRef.current.rotation.y += (targetY - meshRef.current.rotation.y) * 0.05;
    }
  }, [mousePosition]);

  return <canvas ref={threeCanvasRef} className="three-canvas" style={{ opacity: 0.4 }} />;
};

export default ThreeBackground;
