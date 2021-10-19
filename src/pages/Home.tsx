import React, { useEffect } from "react"; 
import * as Component from "../styles/pages/Home";

import { useCharacter } from "../hooks/useCharacter";
import Character from "../components/Character";

const Home = ()=>{
    const char = useCharacter();
    useEffect(()=>{
        window.addEventListener("keydown", handlekeyDown);
    },[]);
    const handlekeyDown = (event: KeyboardEvent)=>{
        switch(event.code){
            case "KeyA":
            case "ArrowLeft":
                char.moveLeft();
            break;
            
            case "KeyW":
            case "ArrowUp":
                char.moveUp();
            break;

            case "KeyD":
            case "ArrowRight":
                char.moveRight();
            break;

            case "KeyS":
            case "ArrowDown":
                char.moveDown();
            break;
        }
    }
    return(
        <Component.Container>
            <Component.Map>
                <Character x={char.x} y={char.y} side={char.side}/>
            </Component.Map>
        </Component.Container>
    );
}

export default Home;