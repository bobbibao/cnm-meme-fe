import  React  from "react";
import { Image } from 'react-bootstrap';
import { ChatDotsFill, PersonVcard } from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";

const SideBarStyled = styled.div`
    height: 100vh;
    background-color: var(--primary);
`

const ItemSidebarStyled = styled.div`
    height: calc(100%/9);
    display:flex;
    align-items:center;
    justify-content:center;
`

const ImageSidebarStyled = styled(Image)`
    width: 60%;
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