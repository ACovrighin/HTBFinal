import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import './Home.css';

const Home = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(1, 3, 6); 
    camera.lookAt(0, 0, 0); 

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); 
    mountRef.current.appendChild(renderer.domElement);

    // Light
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(1, 1, 1);
    scene.add(light);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Load 3D model
    const loader = new GLTFLoader();
    loader.load(
      'models/1993_mclaren_f1.glb',
      (gltf) => {
        const model = gltf.scene;
    
        // Scale the model
        model.scale.set(200, 200, 200);
    
        // Move the model up
        model.position.set(-0.5, 1.3, 0); 
    
        scene.add(model);
    
        // Animate and rotate the model
        const animate = () => {
          requestAnimationFrame(animate);
          model.rotation.y += 0.01; 
          renderer.render(scene, camera);
        };
        animate();
      },
      undefined,
      (error) => {
        console.error('Error loading 3D model:', error);
      }
    );

    // Handle resizing
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      mountRef.current.removeChild(renderer.domElement);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <div className="typewriter">
        <div>
          <p>Welcome to HTB Luxury Rentals</p>
        </div>
      </div>

      {/* Model Section */}
      <div id="threejs-container" style={{ height: '100vh', overflow: 'hidden' }}>
        <div ref={mountRef} style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="desc">
        <h3>What We're About</h3>
        <p>
          Need a rental car that <i>isn't</i> a Nissan Altima? <br />
          Does the sheer thought of a Toyota Prius send shivers down your spine? <br />
          Planning on using a rental car for an illicit activity?
          <br />
          <br />
          Then we've got exactly what you need!
          <br />
          Browse our website and find the vehicle best suited for your needs.
        </p>
      </div>

      <div className="links">
        <a href="/">Home</a>
        <a href="/fleet">Fleet</a>
        <a href="/reserve">Reserve</a>
        <a href="/help">Help</a>
      </div>
    </div>
  );
};

export default Home;
