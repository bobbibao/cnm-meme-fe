import React from 'react';
import { Col} from 'react-bootstrap';
import styled from "styled-components";
import SideBar from "../components/chat/SideBar";
import Tab from 'react-bootstrap/Tab';
import SearchBar from '../components/chat/SearchBar';



const ChatMenu = () => (
    <ChatColStyled>
      <SideBar />
    </ChatColStyled>
  );
const ChatList = () => (
<ChatColStyled>
    <SearchBar />
    {/* <ChatItemGroup /> */}
</ChatColStyled>
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
                        {/* <ChatPane eventKey="#link1" />
                        <ChatPane eventKey="#link2" /> */}
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

export default Chat;
