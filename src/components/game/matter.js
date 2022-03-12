import Matter from 'matter-js';
import { Engine, Runner, Bodies, Composite, Bounds, Events } from 'matter-js';
import customRender from './render'

const velocity = 3;
const jumpForce = 4
let jumps = 0
let isJumping = false
const initialPos = {x: 100, y: 500}

export default function matter(setPos){
    // create an engine

    let engine = Engine.create();
    
    // create a renderer
    let render = customRender.create({
        element: document.body,
        engine: engine,
        options: {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight,
            hasBounds: true
        }
    });

    let cv = document.getElementById('canvas');

    
    // create two boxes and a ground
    let player = Bodies.rectangle(100, 500, 256, 256, {
        frictionAir: 0.04,
        inertia: 'Infinity',
        label: 'player',
        width: 256,
        height: 256,
        animationRun: {
            right: [document.getElementById('player_run_1'),document.getElementById('player_run_2')], 
            left: [document.getElementById('player_run_1_flip'),document.getElementById('player_run_2_flip')]
        },
        animationIdle: {
            right: [document.getElementById('player_idle_1'),document.getElementById('player_idle_2')],
            left: [document.getElementById('player_idle_1_flip'),document.getElementById('player_idle_2_flip')],
        },
        animationJump: {
            right: [document.getElementById('player_run_1')], 
            left: [document.getElementById('player_run_1_flip')]
        },
        state: 'idle',
        side: 'right'

    });
    let boxB = Bodies.rectangle(800, distFund(100), 80, 80, { isStatic: true });
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
                isJumping = true
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
    customRender.run(render);
    
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
        verifyDeath()
        if(!isJumping) verifyState()
        else player.state = 'jump'
        verifySide()
        //console.log(player.side)
    })

    Events.on(engine, 'collisionStart', function(event) {
        let pairs = event.pairs;
        for (let i=0; i<pairs.length; ++i) {
            let pair = pairs[i];

            if(pair.bodyA.label === 'player')
                if(pair.collision.tangent.x)
                    jumps = 1
                    isJumping = false
        }
    });

    function verifyDeath(){
        if(player.position.y > 2000)
            died()
    }
    
    function verifyState(){
        if(player.velocity.x){
            player.state = 'run'
        }
        else{
            player.state = 'idle'
        }
    }

    function verifySide(){
        if(player.velocity.x > 0)
            player.side = 'right'
        if(player.velocity.x < 0)
            player.side = 'left'
    }

    function died(){
        Matter.Body.set(player, 'position', initialPos)
        Matter.Body.setVelocity(player, {x: 0, y: 0})
    }
}

function distFund(dist){
    return window.innerHeight - dist
}