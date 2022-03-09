import Matter from 'matter-js';
import { Engine, Render, Runner, Bodies, Composite, Bounds, Events } from 'matter-js';
import player from './player';

const velocity = 5;

export default function matter(){
    // create an engine
    var canvas = document.getElementById('canvas');

    var engine = Engine.create();
    var world = engine.world
    
    // create a renderer
    var render = Render.create({
        element: document.body,
        engine: engine,
        options: {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight,
            hasBounds: true
        }
    });

    //render.canvas.width = document.documentElement.clientWidth;
    //render.canvas.height = document.documentElement.clientHeight;   
    
    // create two boxes and a ground
    var boxA = Bodies.rectangle(400, 200, 30, 50);
    var boxB = Bodies.rectangle(800, 700, 80, 80, { isStatic: true });
    var ground = Bodies.rectangle(window.innerWidth / 2, window.innerHeight, window.innerWidth, 60, { isStatic: true });

    const keyHandlers = {
        KeyD: () => {
          Matter.Body.setVelocity(boxA, {x: velocity,y: boxA.velocity.y})
        },
        KeyA: () => {
            Matter.Body.setVelocity(boxA, {x: -velocity,y: boxA.velocity.y})
        },
        KeyW: () => {
            Matter.Body.setVelocity(boxA, {x: boxA.velocity.x, y: -10})
        },
    };
      
    const keysDown = new Set();
    document.addEventListener("keydown", event => {
        keysDown.add(event.code);
    });
    document.addEventListener("keyup", event => {
        keysDown.delete(event.code);
    });
      
    Matter.Events.on(engine, "beforeUpdate", event => {
        [...keysDown].forEach(k => {
            keyHandlers[k]?.();
        });
    }); 

    // add all of the bodies to the world
    Composite.add(engine.world, [boxA, boxB, ground]);
    
    // run the renderer
    Render.run(render);
    
    // create runner
    var runner = Runner.create();
    
    // run the engine
    Runner.run(runner, engine);

    Events.on(runner, 'beforeTick', () => {
        console.log('oala')
        Bounds.shift(render.bounds,
            {
                x: boxA.position.x - window.innerWidth / 2,
                y: 0
            });
    })
}
