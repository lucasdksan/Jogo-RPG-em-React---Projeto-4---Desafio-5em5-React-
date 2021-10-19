import { useState } from "react";
import { mapSpots } from "../data/mapSpots";
import { CharacterSide } from "../types/CharacterSide";

export const useCharacter = ()=>{
    const [ side, setSide ] = useState<CharacterSide>("down");
    const [ pos, setPos ] = useState({x:3, y:5});

    function canMove(x: number, y: number){
        if((x < 0 && x <= 450)|| (y < 0 && y <= 450)){
            return false;
        }
        if(mapSpots[y] !== undefined && mapSpots[y][x] !== undefined){
            if(mapSpots[y][x] === 1){
                return true;
            }
        }
        return false;
    }

    const moveLeft = ()=>{
        setPos(pos => ({
            x: canMove(pos.x - 1, pos.y) ? pos.x - 1 : pos.x,
            y: pos.y
        }));
        setSide("left");
   }
    const moveRight = ()=>{
        setPos(pos => ({
            x: canMove(pos.x + 1, pos.y) ? pos.x + 1 : pos.x,
            y: pos.y
        }));
        setSide("right");
    }
    const moveDown = ()=>{
        setPos(pos => ({
            x: pos.x,
            y: canMove(pos.x, pos.y + 1) ? pos.y + 1 : pos.y
        }));
        setSide("down");
    }
    const moveUp = ()=>{
        setPos(pos => ({
            x: pos.x,
            y: canMove(pos.x, pos.y - 1) ? pos.y - 1 : pos.y
        }));
        setSide("up");
    }

    return{
        x: pos.x,
        y: pos.y,
        side,
        moveDown,
        moveUp,
        moveLeft,
        moveRight
    };
}