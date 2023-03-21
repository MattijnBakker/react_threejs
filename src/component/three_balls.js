import React, {useRef} from "react";
import * as THREE from "three";
import {TweenMax} from "gsap";

function ThreeScene() {
    const threeCanvas = useRef(null);

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

    //Define kleuren
    const colors = [
        0xff0000, // red
        0x00ff00, // green
        0x0000ff // blue
    ];

    function animate(ball, targetPosition, targetColor) {
        TweenMax.to(ball.material.color, 5, {r: targetColor.r, g: targetColor.g, b: targetColor.b});
        TweenMax.to(ball.position, 5, {x: targetPosition.x, y: targetPosition.y, z: targetPosition.z});
    }

    function init() {
        //set camera, renderen etc
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        const renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
        renderer.setSize(window.innerWidth, window.innerHeight);
        threeCanvas.current.appendChild(renderer.domElement);

        const balls = positions.flat().map((position, index) => {
            const geometry = new THREE.SphereGeometry(1, 64, 32);
            const material = new THREE.MeshBasicMaterial({
                color: colors[index % colors.length],
                wireframe: true,
            });
            const ball = new THREE.Mesh(geometry, material);
            ball.position.set(position.x, position.y, position.z);
            scene.add(ball);
            return ball;
        });

        let arraycount = 0;
        let lastTime = 0;

        function animateBalls(time) {
            const dt = time - lastTime;
            if (dt >= 20000) { // Loop every 20 seconds
                arraycount = 0;
                lastTime = time;
            }
            const ball = balls[arraycount];
            const nextBall = balls[(arraycount + 1) % balls.length];
            animate(ball, nextBall.position, nextBall.material.color);
            arraycount = (arraycount + 1) % balls.length;
            requestAnimationFrame(animateBalls);
            renderer.render(scene, camera);
        }

        function animate(ball, targetPosition, targetColor) {
            const speed = 0.01;
            const position = ball.position;
            const color = ball.material.color;

            position.lerp(targetPosition, speed);
            color.lerp(targetColor, speed);
        }

        animateBalls(0);

        camera.position.z = 80;
        camera.position.x = -50;
    }

    React.useEffect(() => {
        init();
    }, []);

    return <div ref={threeCanvas}/>;
}


export default ThreeScene;