import React, { useEffect, useRef } from 'react';

const ParticleText = ({ text, isDark }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particlesArray = [];

    const mouse = { x: -1000, y: -1000, radius: 150 };

    let firstLoad = true;
    let loadTimer;

    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // ✅ Added touch support for mobile bounce
    window.addEventListener('touchmove', (e) => {
      const touch = e.touches[0];
      const rect = canvas.getBoundingClientRect();
      mouse.x = touch.clientX - rect.left;
      mouse.y = touch.clientY - rect.top;
    });

    // ✅ Responsive canvas height
    if (window.innerWidth < 640) {
      canvas.height = 200; // tighter on mobile
    } else {
      canvas.height = 300; // default for tablet/desktop
    }
    canvas.width = window.innerWidth;

    class Particle {
      constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.size = 2.5;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 40) + 5;
        this.opacity = 1;
      }

      draw() {
        ctx.fillStyle = `rgba(${isDark ? "255,255,255" : "15,23,42"},${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }

      update() {
        if (firstLoad) {
          this.x += Math.random() * 12 - 6;
          this.y += Math.random() * 12 - 6;
          return;
        }

        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        let maxDistance = mouse.radius;
        let force = (maxDistance - distance) / maxDistance;
        let directionX = (forceDirectionX * force * this.density);
        let directionY = (forceDirectionY * force * this.density);

        if (distance < mouse.radius) {
          this.x -= directionX;
          this.y -= directionY;
        } else {
          if (this.x !== this.baseX) {
            let dx = this.x - this.baseX;
            this.x -= dx / 8;
          }
          if (this.y !== this.baseY) {
            let dy = this.y - this.baseY;
            this.y -= dy / 8;
          }
        }

        // Twinkle effect
        if (Math.random() < 0.002) {
          this.opacity = 0.2;
        } else if (this.opacity < 1) {
          this.opacity += 0.05;
        }
      }
    }

    const init = () => {
      particlesArray = [];
      const textColor = isDark ? 'rgba(255,255,255,1)' : 'rgba(15, 23, 42, 1)';

      // ✅ Responsive font size
      let fontSize = 108; // desktop default
      if (window.innerWidth < 640) {
        fontSize = 60; // mobile
      } else if (window.innerWidth < 1024) {
        fontSize = 80; // tablet
      }

      ctx.fillStyle = textColor;
      ctx.font = `bold ${fontSize}px Poppins`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(text, canvas.width / 2, canvas.height / 2);

      const textCoordinates = ctx.getImageData(0, 0, canvas.width, canvas.height);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let y = 0; y < textCoordinates.height; y++) {
        for (let x = 0; x < textCoordinates.width; x++) {
          if (textCoordinates.data[(y * 4 * textCoordinates.width) + (x * 4) + 3] > 128) {
            if (x % 6 === 0 && y % 6 === 0) {
              particlesArray.push(new Particle(x, y, textColor));
            }
          }
        }
      }
    };

    let animationFrameId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].draw();
        particlesArray[i].update();
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    loadTimer = setTimeout(() => {
      firstLoad = false;
    }, 1000);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      if (window.innerWidth < 640) {
        canvas.height = 200;
      } else {
        canvas.height = 300;
      }
      init();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      clearTimeout(loadTimer);
    };
  }, [text, isDark]);

  return <canvas ref={canvasRef}></canvas>;
};

export default ParticleText;
