import React, { useEffect, useRef, useState } from 'react';

interface Point {
  x: number;
  y: number;
  alpha: number;
  hue: number;
}

const CursorTrail: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [cursorTrail, setCursorTrail] = useState<Point[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const onMouseMove = (e: MouseEvent) => {
      const hue = Math.random() * 360;
      const newPoint: Point = { x: e.clientX, y: e.clientY, alpha: 1, hue };

      setCursorTrail((trail) => {
        if (trail.length > 100) {
          trail.shift();
        }
        return [...trail, newPoint];
      });
    };

    const drawLine = (index: number) => {
      if (index < 3) return;
      ctx.beginPath();
      ctx.moveTo(cursorTrail[index - 3].x, cursorTrail[index - 3].y);
      ctx.bezierCurveTo(
        cursorTrail[index - 2].x,
        cursorTrail[index - 2].y,
        cursorTrail[index - 1].x,
        cursorTrail[index - 1].y,
        cursorTrail[index].x,
        cursorTrail[index].y
      );
      ctx.strokeStyle = `hsla(${cursorTrail[index].hue}, 100%, 50%, ${cursorTrail[index].alpha})`;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.lineWidth = 10;
      ctx.stroke();

      cursorTrail[index].alpha -= 0.005;
    };

    const renderTrail = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      cursorTrail.forEach((_, index) => {
        drawLine(index);
      });

      requestAnimationFrame(renderTrail);
    };

    window.addEventListener('mousemove', onMouseMove);
    requestAnimationFrame(renderTrail);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [cursorTrail]);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', zIndex: -1, top: 0, left: 0 }}
    />
  );
};

export default CursorTrail;