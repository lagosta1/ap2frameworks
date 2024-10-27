import Logo from '../Logo';
import Opcoes from '../Opcoes';
import Icones from '../Icones';
import styled from "styled-components";

const HeaderComponents = styled.header`
    background-color: #FFF;
    display: flex;
    align-items: center;
    vertical-align: top`

function Header() {
    return(
        <HeaderComponents>
            <Logo></Logo>
            <Opcoes></Opcoes>
            <Icones></Icones>
        </HeaderComponents>
    )
}

export default Header;