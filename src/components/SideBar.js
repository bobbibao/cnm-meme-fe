import  React  from "react";
import { Container, Row, Col, Image } from 'react-bootstrap';
import { ChatDotsFill, PersonLinesFill, PersonVcard, PersonVcardFill } from 'react-bootstrap-icons';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
import route from "../configs/route";

const SideBarStyled = styled.div`
    height: 99vh;
    background-color: var(--primary);
`

const ItemSidebarStyled = styled.div`
    height: calc(100%/9);
    padding: 10px 0 0 10px;
    display:flex;
    align-items:center;
    justify-content:center;
`

const ImageSidebarStyled = styled(Image)`
    width: 60%;
    height: 60%;
`

const SideBar = () => {
    return(
        <SideBarStyled>
            <ItemSidebarStyled>
                <ImageSidebarStyled src="https://i.imgur.com/rsJjBcH.png"
                roundedCircle
                />
            </ItemSidebarStyled>

            <ItemSidebarStyled>
                <ChatDotsFill size={35} color="white"/>
            </ItemSidebarStyled>

            <ItemSidebarStyled>
                <PersonVcard size={35} color="white"/>
            </ItemSidebarStyled>
        </SideBarStyled>
    )
}

export default SideBar;