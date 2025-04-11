/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/public/scripts/main.ts":
/*!************************************!*\
  !*** ./src/public/scripts/main.ts ***!
  \************************************/
/***/ (() => {

eval("\nclass StarfieldAnimation {\n    constructor() {\n        this.stars = [];\n        this.angle = 0;\n        this.NUM_STARS = 200;\n        this.ORBIT_SPEED = 0.000075; // Reduced by 25% from 0.0001\n        this.canvas = document.getElementById('starfield');\n        this.ctx = this.canvas.getContext('2d');\n        this.resizeCanvas();\n        this.initStars();\n        window.addEventListener('resize', () => this.resizeCanvas());\n        requestAnimationFrame(() => this.animate());\n    }\n    resizeCanvas() {\n        this.canvas.width = window.innerWidth;\n        this.canvas.height = window.innerHeight;\n    }\n    initStars() {\n        for (let i = 0; i < this.NUM_STARS; i++) {\n            this.stars.push({\n                x: Math.random() * this.canvas.width,\n                y: Math.random() * this.canvas.height,\n                size: Math.random() * 2 + 1,\n                brightness: Math.random(),\n                twinkleSpeed: (Math.random() * 0.02 + 0.01) * 0.25, // Reduced by 75%\n                twinkleOffset: Math.random() * Math.PI * 2\n            });\n        }\n    }\n    animate() {\n        this.ctx.fillStyle = 'black';\n        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);\n        const centerX = this.canvas.width / 2;\n        const centerY = this.canvas.height / 2;\n        this.angle += this.ORBIT_SPEED;\n        this.stars.forEach(star => {\n            // Calculate orbital movement\n            const dx = star.x - centerX;\n            const dy = star.y - centerY;\n            const distance = Math.sqrt(dx * dx + dy * dy);\n            const currentAngle = Math.atan2(dy, dx) + this.angle;\n            const newX = centerX + distance * Math.cos(currentAngle);\n            const newY = centerY + distance * Math.sin(currentAngle);\n            // Calculate twinkling effect\n            const twinkle = Math.sin(Date.now() * star.twinkleSpeed + star.twinkleOffset) * 0.5 + 0.5;\n            const alpha = (star.brightness * 0.5 + 0.5) * twinkle;\n            this.ctx.beginPath();\n            this.ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;\n            this.ctx.arc(newX, newY, star.size, 0, Math.PI * 2);\n            this.ctx.fill();\n        });\n        requestAnimationFrame(() => this.animate());\n    }\n}\n// Start the animation when the page loads\nwindow.addEventListener('load', () => new StarfieldAnimation());\n\n\n//# sourceURL=webpack://hackathon-1/./src/public/scripts/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/public/scripts/main.ts"]();
/******/ 	
/******/ })()
;