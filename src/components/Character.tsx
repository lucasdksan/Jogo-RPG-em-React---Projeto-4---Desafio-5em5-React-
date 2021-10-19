import React from "react";

import * as Component from "../styles/components/Character";
import { CharacterSide } from "../types/CharacterSide";

interface CharacterProps{
    x: number;
    y: number;
    side: CharacterSide;
}

const Character:React.FC <CharacterProps>= ({ x, y, side })=>{
    const size = 30;
    const sides = {
        left: -30,
        right: -60,
        up: -90,
        down: 0,
    }
    function handlePosition(value: number):number{
        return value * size;
    }
    console.log({x, y});
    return(
        <Component.Container
            leftP={handlePosition(x)}
            topP={handlePosition(y)}
            side={sides[side] ?? 0}
        >

        </Component.Container>
    );
}

export default Character;