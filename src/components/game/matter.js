import Matter from 'matter-js';
import { Engine, Render, Runner, Bodies, Composite, Bounds, Events } from 'matter-js';
import player from './player';

const velocity = 3;
const jumpForce = 0.1
let jumps = 0
const initialPos = {x: 100, y: 500}

export default function matter(setPos){
    // create an engine

    let engine = Engine.create();
    
    // create a renderer
    let render = Render.create({
        element: document.body,
        engine: engine,
        options: {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight,
            hasBounds: true
        }
    });

    
    // create two boxes and a ground
    let player = Bodies.rectangle(100, 500, 30, 50, {
        frictionAir: 0.04,
        inertia: 'Infinity',
        label: 'player'
    });
    let boxB = Bodies.rectangle(800, 700, 80, 80, { isStatic: true });
    let ground = Bodies.rectangle(window.innerWidth / 2, window.innerHeight, window.innerWidth, 60, { isStatic: true });

    const keyHandlers = {
        KeyD: () => {
          Matter.Body.setVelocity(player, {x: velocity,y: player.velocity.y})
        },
        KeyA: () => {
            Matter.Body.setVelocity(player, {x: -velocity,y: player.velocity.y})
        },
        KeyW: () => {
            if(jumps > 0){
                Matter.Body.applyForce(player, {x:player.position.x,y:player.position.y}, {x:player.force.x,y:-jumpForce});
                jumps --
            }
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
    Composite.add(engine.world, [player, boxB, ground]);
    
    // run the renderer
    Render.run(render);
    
    // create runner
    let runner = Runner.create();
    
    // run the engine
    Runner.run(runner, engine);

    Events.on(runner, 'beforeTick', () => {
        setPos(-player.position.x)
        Bounds.shift(render.bounds,{
            x: player.position.x - window.innerWidth / 2,
            y: 0
        });
        console.log(player.position)
        verifyDeath()
    })

    Events.on(engine, 'collisionStart', function(event) {
        let pairs = event.pairs;
        for (let i=0; i<pairs.length; ++i) {
            let pair = pairs[i];

            if(pair.bodyA.label === 'player')
                if(pair.collision.tangent.x)
                    jumps = 1
        }
    });

    function verifyDeath(){
        if(player.position.y > 2000)
            died()
    }

    function died(){
        Matter.Body.set(player, 'position', initialPos)
        Matter.Body.setVelocity(player, {x: 0, y: 0})
    }
}
