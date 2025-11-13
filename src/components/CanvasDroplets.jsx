import { useEffect, useRef } from "react";

const CanvasDroplets = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

  class Droplet {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.reset();
  }

  reset() {
    this.x = Math.random() * this.canvas.width;
    this.y = -20;
    this.speed = 2 + Math.random() * 3;
    this.size = 3 + Math.random() * 4;
    this.opacity = 0.3 + Math.random() * 0.4;
    this.rippleSize = 0;
    this.isRippling = false;
    this.rippleOpacity = 0;
  }

  update() {
    if (!this.isRippling) {
      this.y += this.speed;
      if (this.y > this.canvas.height) {
        this.isRippling = true;
        this.rippleSize = 0;
        this.rippleOpacity = this.opacity;
      }
    } else {
      this.rippleSize += 1;
      this.rippleOpacity -= 0.02;
      if (this.rippleOpacity <= 0) this.reset();
    }
  }

  draw() {
    const ctx = this.ctx;
    if (!this.isRippling) {
      const gradient = ctx.createRadialGradient(
        this.x,
        this.y,
        0,
        this.x,
        this.y,
        this.size
      );
      gradient.addColorStop(0, `rgba(103, 232, 249, ${this.opacity})`);
      gradient.addColorStop(
        0.5,
        `rgba(34, 211, 238, ${this.opacity * 0.6})`
      );
      gradient.addColorStop(1, "rgba(103, 232, 249, 0)");

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = `rgba(103, 232, 249, ${this.opacity * 0.3})`;
      ctx.fillRect(this.x - 0.5, this.y - 10, 1, 10);
    } else {
      ctx.strokeStyle = `rgba(34, 211, 238, ${this.rippleOpacity})`;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(this.x, this.canvas.height - 10, this.rippleSize, 0, Math.PI * 2);
      ctx.stroke();
    }
  }
}

// ===== Ripple class for click effect =====
class Ripple {
  constructor(x, y, ctx) {
    this.x = x;
    this.y = y;
    this.radius = 0;
    this.opacity = 0.5;
    this.ctx = ctx;
  }

  update() {
    this.radius += 3;
    this.opacity -= 0.02;
  }

  draw() {
    const ctx = this.ctx;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(34, 211, 238, ${this.opacity})`;
    ctx.lineWidth = 2;
    ctx.stroke();
  }
}

const droplets = [];
for (let i = 0; i < 30; i++) {
  droplets.push(new Droplet(canvas, ctx));
}

const ripples = [];

// In animate loop
droplets.forEach(d => { d.update(); d.draw(); });
ripples.forEach((r, i) => { r.update(); r.draw(); if (r.opacity <= 0) ripples.splice(i, 1); });

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      droplets.forEach(d => { d.update(); d.draw(); });
      ripples.forEach((r, i) => { r.update(); r.draw(); if (r.opacity <= 0) ripples.splice(i, 1); });
      requestAnimationFrame(animate);
    };
    animate();

    const handleClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      ripples.push(new Ripple(e.clientX - rect.left, e.clientY - rect.top));
    };
    canvas.addEventListener("click", handleClick);

    const handleResize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    window.addEventListener("resize", handleResize);

    return () => {
      canvas.removeEventListener("click", handleClick);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="droplet-canvas" style={{ opacity: 0.7 }} />;
};

export default CanvasDroplets;
