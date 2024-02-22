import  React, { useState }  from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
import route from "../configs/route";
import SideBar from "../components/SideBar";

const ChatColStyled = styled(Col)`
    margin: 0;
    padding: 0;
    border-right: 1px solid black;
`

const Chat = () => {
    return(
        <Row>
            <ChatColStyled md="3">
                <Row>
                    {/* Chat Menu */}
                    <Col lg="3" xs="3">
                    <SideBar></SideBar>
                    </Col>

                    {/* Chat List */}
                    <Col lg="9">

                    </Col>
                </Row>
            </ChatColStyled>

            <ChatColStyled md="9">
            </ChatColStyled>
        </Row>
    )
}

export default Chat;