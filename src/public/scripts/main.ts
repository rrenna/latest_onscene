interface Star {
    x: number;
    y: number;
    size: number;
    brightness: number;
    twinkleSpeed: number;
    twinkleOffset: number;
}

class StarfieldAnimation {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private stars: Star[] = [];
    private angle: number = 0;
    private readonly NUM_STARS = 200;
    private readonly ORBIT_SPEED = 0.000075; // Reduced by 25% from 0.0001
    
    constructor() {
        this.canvas = document.getElementById('starfield') as HTMLCanvasElement;
        this.ctx = this.canvas.getContext('2d')!;
        this.resizeCanvas();
        this.initStars();
        
        window.addEventListener('resize', () => this.resizeCanvas());
        requestAnimationFrame(() => this.animate());
    }
    
    private resizeCanvas(): void {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    private initStars(): void {
        for (let i = 0; i < this.NUM_STARS; i++) {
            this.stars.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: Math.random() * 2 + 1,
                brightness: Math.random(),
                twinkleSpeed: (Math.random() * 0.02 + 0.01) * 0.25, // Reduced by 75%
                twinkleOffset: Math.random() * Math.PI * 2
            });
        }
    }
    
    private animate(): void {
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        const centerX = this.canvas.width / 2;
        const centerY = this.canvas.height / 2;
        this.angle += this.ORBIT_SPEED;
        
        this.stars.forEach(star => {
            // Calculate orbital movement
            const dx = star.x - centerX;
            const dy = star.y - centerY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const currentAngle = Math.atan2(dy, dx) + this.angle;
            
            const newX = centerX + distance * Math.cos(currentAngle);
            const newY = centerY + distance * Math.sin(currentAngle);
            
            // Calculate twinkling effect
            const twinkle = Math.sin(Date.now() * star.twinkleSpeed + star.twinkleOffset) * 0.5 + 0.5;
            const alpha = (star.brightness * 0.5 + 0.5) * twinkle;
            
            this.ctx.beginPath();
            this.ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
            this.ctx.arc(newX, newY, star.size, 0, Math.PI * 2);
            this.ctx.fill();
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

// Start the animation when the page loads
window.addEventListener('load', () => new StarfieldAnimation());