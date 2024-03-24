import React from 'react';
import { Col, ListGroup } from 'react-bootstrap';
import styled from "styled-components";
import Tab from 'react-bootstrap/Tab';
import Stack from 'react-bootstrap/Stack';

import SideBar from "../components/chat/SideBar";
import SearchBar from '../components/chat/SearchBar';
import ChatItem from "../components/chat/ChatItem";
import Header from "../components/chat/Main-Header";
import MessageList from "../components/chat/Main-MessageList";


const ChatMenu = () => (
    <ChatColStyled>
      <SideBar />
    </ChatColStyled>
  );
const ChatList = () => (
<ChatColStyled>
    <SearchBar />
    <ChatItemGroup />
</ChatColStyled>
);
const MessageArea = () => (
    <div className="flex-grow-1 border d-flex flex-column-reverse" style={{ backgroundColor: "#F1FFFA" }}>
        <MessageList />
    </div>
);

const ChatItemGroup = () => {
    const renderChatItems = () => {
        return Array.from({ length: 11 }, (_, i) => <ChatItem index={i} />);
      };
    return <StyledListGroup>{renderChatItems()
    }</StyledListGroup>;
  };
  const ChatPane = ({ eventKey }) => (
  
    <Tab.Pane eventKey={eventKey} className="h-100">
        <Stack className="h-100">
            <Header />
            <MessageArea />
            {/* <InputArea /> */}
        </Stack>
    </Tab.Pane>
  );
const Chat = () => {
    return (
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
            <Container className="w-100 m-0">
                <FirstColumn>
                    <ThirdColumn>
                        <ChatMenu />
                    </ThirdColumn>
                    <FourthColumn>
                        <ChatList />
                    </FourthColumn>
                </FirstColumn>
  
                <SecondColumn>
                    <Tab.Content className="h-100">
                        <ChatPane eventKey="#link1" />
                        <ChatPane eventKey="#link2" />
                    </Tab.Content>
                </SecondColumn>
            </Container>
        </Tab.Container>
    );
  };



const ChatColStyled = styled(Col)`
  margin: 0;
  padding: 0;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const FirstColumn = styled.div`
  flex: 0 0 auto;
  min-width: 70px;
  display: flex;
  box-sizing: border-box;
`;

const SecondColumn = styled.div`
  flex: 1 1 auto;
  box-sizing: border-box;
`;

const ThirdColumn = styled.div`
  flex: 1 1 80px;
  max-width: 80px;
  box-sizing: border-box;
`;

const FourthColumn = styled.div`
  flex: 1 1 350px;
  max-width: 350px;
  box-sizing: border-box;
  
  @media (max-width: 700px) {
    display: none;
  }
`;
const StyledListGroup = styled(ListGroup)`
  max-height: 90vh;
  overflow-y: auto;
  border-radius: 0;
  scrollbar-width: thin;
  scrollbar-track-color: transparent;
  scrollbar-color: #DEDEDE transparent;
  scroll-behavior: smooth;
`;
export default Chat;
