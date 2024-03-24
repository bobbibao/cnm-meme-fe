import React, { useEffect, useRef } from 'react';
import { Container, Row, Col, ListGroup, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";

const StyledListGroup = styled(ListGroup)`
  max-height: 83vh;
  overflow-y: auto;
  scroll-behavior: smooth;
  scrollbar-width: thin;
  scrollbar-track-color: transparent;
  scrollbar-color: #DEDEDE transparent;
`;
const MessageList = () => {
  const messages = [
    {
      id: 1,
      senderName: 'John Doe',
      avatar: 'https://via.placeholder.com/30',
      content: 'Hello there!',
      timestamp: '10:30 AM',
      sent: true,
    },
    {
      id: 2,
      senderName: 'Alice Smith',
      avatar: 'https://via.placeholder.com/30',
      content: 'Hi, how are you?',
      timestamp: '10:35 AM',
      sent: false,
    },
    {
      id: 1,
      senderName: 'John Doe',
      avatar: 'https://via.placeholder.com/30',
      content: 'Hello there!',
      timestamp: '10:30 AM',
      sent: true,
    },
    {
      id: 2,
      senderName: 'Alice Smith',
      avatar: 'https://via.placeholder.com/30',
      content: 'Hi, how are you?',
      timestamp: '10:35 AM',
      sent: false,
    },
    {
      id: 1,
      senderName: 'John Doe',
      avatar: 'https://via.placeholder.com/30',
      content: 'Hello there!',
      timestamp: '10:30 AM',
      sent: true,
    },
    {
      id: 2,
      senderName: 'Alice Smith',
      avatar: 'https://via.placeholder.com/30',
      content: 'Hi, how are you?',
      timestamp: '10:35 AM',
      sent: false,
    },
    {
      id: 1,
      senderName: 'John Doe',
      avatar: 'https://via.placeholder.com/30',
      content: 'Hello there!',
      timestamp: '10:30 AM',
      sent: true,
    },
    {
      id: 2,
      senderName: 'Alice Smith',
      avatar: 'https://via.placeholder.com/30',
      content: 'Hi, how are you?',
      timestamp: '10:35 AM',
      sent: false,
    },
    {
      id: 1,
      senderName: 'John Doe',
      avatar: 'https://via.placeholder.com/30',
      content: 'Hello there!',
      timestamp: '10:30 AM',
      sent: true,
    },
    {
      id: 2,
      senderName: 'Alice Smith',
      avatar: 'https://via.placeholder.com/30',
      content: 'Hi, how are you?',
      timestamp: '10:35 AM',
      sent: false,
    },
    // Add more messages as needed
  ];
  const listGroupRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom when new messages are added
    if (listGroupRef.current) {
      listGroupRef.current.scrollTop = listGroupRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <Container fluid className="message-list-container p-1 h-100" >
      <Row className='m-0'>
        <Col className='p-0'>
          <StyledListGroup ref={listGroupRef} className="message-container">
            {messages.map((message) => (
              <ListGroup.Item key={message.id} className={`border-0 p-1 d-flex ${message.sent ? 'justify-content-end' : 'justify-content-start'}`} style={{backgroundColor: "unset"}}>
                <div className="message-content d-inline-block border border-primary p-2 rounded">
                  <p className='m-0'>{message.content}</p>
                  <small className="text-muted">{message.timestamp}</small>
                </div>
              </ListGroup.Item>
            ))}
            <div className="px-1 d-flex flex-row-reverse">
                  <Image
                    src="https://i.imgur.com/rsJjBcH.png"
                    style={{ width: '20px', height: '20px' }}
                  />
                  </div>
          </StyledListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default MessageList;
