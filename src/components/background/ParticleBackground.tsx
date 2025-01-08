import React, { useEffect, useRef } from 'react';
import './SmallPRNG';
import { initSwarm } from './swarm';

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      canvasRef.current.id = 'swarm';
      canvasRef.current.style.position = 'fixed';
      canvasRef.current.style.top = '0';
      canvasRef.current.style.left = '0';
      canvasRef.current.style.width = '100vw';
      canvasRef.current.style.height = '100vh';
      canvasRef.current.style.pointerEvents = 'none';

      // Force a resize to match window dimensions
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;

      setTimeout(() => {
        initSwarm();
      }, 100);
    }
  }, []);

  return (
    <div className="fixed inset-0" style={{ zIndex: 0 }}>
      <canvas 
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
};

export default ParticleBackground; 