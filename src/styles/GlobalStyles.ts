import { createGlobalStyle } from 'styled-components';
import { colors } from './themes/colors';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background: ${colors.main_sub_black};
        padding: 0px;
        width: auto;
    }
    #root{
        width: 100%;
        height: 100%;
    }
`;