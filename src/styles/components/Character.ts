import styled from 'styled-components';

import image from "../../assets/char.png";

interface ContainerProps{
    leftP?: number;
    topP?: number;
    side: number;
}

export const Container = styled.div<ContainerProps>`
    width: 30px;
    height: 30px;
    position: absolute;
    left: ${props => `${props.leftP}px`};
    top: ${props => `${props.topP}px`};
    background-image: url(${image});
    background-position: 0px ${props => `${props.side}px`};
`;
