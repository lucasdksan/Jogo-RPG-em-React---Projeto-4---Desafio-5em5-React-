import styled from 'styled-components';
import { colors } from '../themes/colors';

import image from "../../assets/map.png";

export const Container = styled.main`
    background-color: ${colors.main_sub_black};
    min-height: 100vh;
    color: ${colors.main_white};
`;
export const Map = styled.div`
    width: 480px;
    height: 480px;
    background-image: url(${image});
    background-position: left top;
    background-size: 100%;
`;