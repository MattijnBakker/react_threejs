import React, {useEffect, useRef} from "react";
import * as THREE from "three";
import TWEEN from "@tweenjs/tween.js";

import '../scss/components/_three.scss'



function Canvas() {
    const sceneRef = useRef(null);

    useEffect(() => {
        // Define scene, camera, and renderer variables
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        const renderer = new THREE.WebGLRenderer({alpha: true});
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0);
        sceneRef.current.appendChild(renderer.domElement);
        renderer.setPixelRatio(window.devicePixelRatio)

        const positions = [
            //array webvalue
            [
                {x: -29.5, y: 15, z: 5},
                {x: -23.5, y: 16, z: 0},
                {x: -20, y: 16, z: 0},
                {x: -15, y: 16, z: 0},
                {x: -10, y: 16, z: 0},
                {x: -5, y: 16, z: 0},
                {x: -0, y: 16, z: 0},
                {x: 7, y: 16.5, z: 0},
                {x: 11.5, y: 16.5, z: 0},
                {x: 13.2, y: 12.5, z: 0},
                {x: 16.2, y: 3.5, z: 0},
                {x: 16.2, y: 3.5, z: 0},
                {x: 17.7, y: -1, z: 0},
                {x: 19, y: -5, z: 0},
                {x: 21, y: -10, z: 0},
                {x: 22, y: -14, z: 0},
                {x: 23, y: -17.8, z: 0},
                {x: 23, y: -21.8, z: 0},
                {x: 18.7, y: -21.8, z: 0},
                {x: 14, y: -21.8, z: 0},
                {x: 9.5, y: -21.8, z: 0},
                {x: 4.5, y: -21.8, z: 0},
                {x: 0.5, y: -21.8, z: 0},
                {x: -4.5, y: -21.8, z: 0},
                {x: -16.5, y: -21.8, z: 0},
                {x: -12, y: -21.8, z: 0},
                {x: -18.4, y: -17, z: 0},
                {x: -20.4, y: -9, z: 0},
                {x: -22.4, y: -4.5, z: 0},
                {x: -23.4, y: -0, z: 0},
                {x: -26.4, y: 9.5, z: 0},
                {x: -27.4, y: 13.5, z: 0},
                {x: -25.4, y: 4.5, z: 0},
                //webvalue middenn
                {x: -4.4, y: 3.5, z: 0},
                {x: -4.4, y: 0.5, z: 0},
                {x: -4.4, y: -2.5, z: 0},
                {x: -0.4, y: -0.5, z: 0},
                {x: 1.4, y: -3.5, z: 0},
                {x: 3.4, y: -6.5, z: 0},
                {x: 5.4, y: -8.5, z: 0},
                {x: 5.4, y: -3.5, z: 0},
                {x: 5.4, y: -0.5, z: 0},
                {x: 5.4, y: 2.5, z: 0},
                {x: 5.4, y: 4.5, z: 0},

                {x: -4.4, y: -5.5, z: 0},
                {x: -4.4, y: -8.5, z: 0},
                {x: -7.4, y: -5.5, z: 0},
                {x: -10, y: -2.5, z: 0},
                {x: -12, y: -0, z: 0},
                {x: -14, y: 3, z: 0},
            ],

            //array webvalue2
            [
                {x: -2.5, y: 15, z: 5},
                {x: -2.5, y: 16, z: 0},
                {x: -2, y: 16, z: 0},
                {x: -2, y: 16, z: 0},
                {x: -2, y: 16, z: 0},
                {x: -2, y: 16, z: 0},
                {x: -2, y: 16, z: 0},
                {x: 2, y: 16.5, z: 0},
                {x: 2.5, y: 16.5, z: 0},
                {x: 2.2, y: 12.5, z: 0},
                {x: 2.2, y: 3.5, z: 0},
                {x: 2.2, y: 3.5, z: 0},
                {x: 2.7, y: -1, z: 0},
                {x: 2, y: -5, z: 0},
                {x: 2, y: -10, z: 0},
                {x: 22, y: -14, z: 0},
                {x: 23, y: -17.8, z: 0},
                {x: 23, y: -21.8, z: 0},
                {x: 18.7, y: -21.8, z: 0},
                {x: 14, y: -21.8, z: 0},
                {x: 9.5, y: -21.8, z: 0},
                {x: 4.5, y: -21.8, z: 0},
                {x: 0.5, y: -21.8, z: 0},
                {x: -4.5, y: -21.8, z: 0},
                {x: -16.5, y: -21.8, z: 0},
                {x: -12, y: -21.8, z: 0},
                {x: -18.4, y: -17, z: 0},
                {x: -20.4, y: -9, z: 0},
                {x: -22.4, y: -4.5, z: 0},
                {x: -23.4, y: -0, z: 0},
                {x: -26.4, y: 9.5, z: 0},
                {x: -27.4, y: 13.5, z: 0},
                {x: -25.4, y: 4.5, z: 0},
                //webvalue middenn
                {x: -4.4, y: 3.5, z: 0},
                {x: -4.4, y: 0.5, z: 0},
                {x: -4.4, y: -2.5, z: 0},
                {x: -0.4, y: -0.5, z: 0},
                {x: 1.4, y: -3.5, z: 0},
                {x: 3.4, y: -6.5, z: 0},
                {x: 5.4, y: -8.5, z: 0},
                {x: 5.4, y: -3.5, z: 0},
                {x: 5.4, y: -0.5, z: 0},
                {x: 5.4, y: 2.5, z: 0},
                {x: 5.4, y: 4.5, z: 0},

                {x: -4.4, y: -5.5, z: 0},
                {x: -4.4, y: -8.5, z: 0},
                {x: -7.4, y: -5.5, z: 0},
                {x: -10, y: -2.5, z: 0},
                {x: -12, y: -0, z: 0},
                {x: -14, y: 3, z: 0},
            ]

        ];
        const balls = [];
        setInterval(() => {
            var arraycount = 0;

            const balls = positions[arraycount].map((position) => {
                const geometry = new THREE.SphereGeometry(1, 64, 32);
                const material = new THREE.MeshBasicMaterial({color: 0xfff, wireframe: true});
                const ball = new THREE.Mesh(geometry, material);
               // ball.position.set(position.x, position.y, position.z);
                const targetX = position.x;
                const targetY = position.y;
                const targetZ = position.z;

                ball.position.set(targetX, targetY, targetZ);

                scene.add(ball);
                return ball;
            });
        }, 1000);

        // Animate balls every 10 seconds
        setInterval(() => {
            for (let i = 0; i < balls.length; i++) {
                const targetX = Math.random() * 20 - 10;
                const targetY = Math.random() * 20 - 10;
                const targetZ = Math.random() * 20 - 10;
            }
        }, 5000);

         const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };


        animate();

        // Update camera position
        camera.position.z = 70;
        camera.position.x = -50;
    }, []);

    return <div ref={sceneRef}></div>;
}

export default Canvas;
