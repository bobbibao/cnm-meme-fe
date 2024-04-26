import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, ListGroup, Image, Dropdown, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
import axiosClient from '../../api/axiosClient';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faFile } from '@fortawesome/free-solid-svg-icons';


const StyledListGroup = styled(ListGroup)`
  max-height: 83vh;
  overflow-y: auto;
  scroll-behavior: smooth;
  scrollbar-width: thin;
  scrollbar-track-color: transparent;
  scrollbar-color: #DEDEDE transparent;
`;
const MessageList = (id) => {
  var socket = id.socket;
  const [show, setShow] = useState(false);
  const [userInfo, setUserInfo] = useState([]);
  const [forwarded, setForwarded] = useState([]);
  const [messageId, setMessageId] = useState('');
  const handleClose = () => setShow(false);
  // console.log("socket", socket);
    const [messages, setMessages] = useState([]);
    useEffect(() => {
      const fetchMessages = async () => {
        try {
          if (id.id) {
            const res = await axiosClient.get(`/messages/${id.id}`);
            console.log("messages123123123: ", res.data.data)
            if (res.data.data || res.status === 200)
              setMessages(res.data.data);
            else{
              setMessages([]);
            }
          }
        } catch (error) {
          setMessages([]);
          // console.error("MessageList: ", error);
        }
      };
      fetchMessages();
    }, [id.id]);

    const listGroupRef = useRef(null);
    useEffect(() => {
      if (listGroupRef.current) {
        listGroupRef.current.scrollTop = listGroupRef.current.scrollHeight;
      }
    }, [listGroupRef.current, messages]);

    useEffect(() => {
      socket.on('message', (message) => {
        const newMessage = {
          id: message.id,
          content: message.content,
          sent: message.senderId,
          senderName: message.senderName,
          avatarSender: message.avatarSender,
          time: message.time,
          type: message.type,
          media: message.media,
        }
        setMessages([...messages, newMessage]);
      })
    }, [messages]);

    const [showDropdownIndex, setShowDropdownIndex] = useState(null);

    const handleMouseEnter = (index) => {
      setShowDropdownIndex(index);
    };

    const handleMouseLeave = () => {
      setShowDropdownIndex(null);
    };


const handleDelete = async (messageId) => {
  const res = await axiosClient.delete(`/message/${messageId}`);
  if (res.status === 200)  setMessages(messages.filter(message => message.id !== messageId));

  //   socket.emit('delete message', { chatRoomId: id.id, messageId });
  //     socket.on('delete message', (message) => {
  //       console.log('delete message', message);
  //       setMessages(messages.filter(message => message.id !== message.id));
  //     });
  // }
};
const handleHide= async (messageId) => {
  const confirm = window.confirm('Bạn có chắc chắn muốn ẩn tin nhắn này ở phía bạn?');
  if (!confirm) return;
  const res = await axiosClient.patch(`/hide-message/${messageId}`);
  if (res.status === 200){
    setMessages(messages.map(message => message.id === messageId ? { ...message, hided: true } : message));

  }
};
const handleUnsend = async (messageId) => {
  const confirm = window.confirm('Bạn có chắc chắn muốn thu hồi tin nhắn này?');
  if (!confirm) return;

  const res = await axiosClient.patch(`/unsent-message/${messageId}`);
  // if (res.status === 200) setMessages(messages.map(message => message.id === messageId ? { ...message, unsent: true } : message));
  if (res.status === 200) socket.emit('unsend message', { chatRoomId: id.id, messageId });
  // socket.on('unsend message', (a) => {
  //   console.log('unsend message', a);
  //   setMessages(messages.map(message => message.id === a.id ? { ...message, unsent: true } : message));
  // });
};
const handleForward = async (messageId) => {
  setForwarded([]);
  setMessageId(messageId);
    const res = await axiosClient.get("/info-chat-item/", {
      params: {
        chatRoomId: id.id,
      },
    });
    setUserInfo(res.data.data);
    console.log(userInfo);
    setShow(true);
}
const handleSendForward = async (index, idChatRoom) => {
  console.log('forward message', messageId, idChatRoom);
  const res = await axiosClient.patch(`/forward-message/${messageId}`, {
    data: {
      chatRoomId: idChatRoom,
    },
  });
  console.log('res', res);
  if (res.status === 200){
        const data = {
            chatRoomId: idChatRoom,
            senderId: localStorage.getItem('userId'),
            content: res.data.data.content,
            type: res.data.data.type,
            media: res.data.data.media,
        }
        socket.emit('message', data, res.data.data._id);
  }
  socket.on('message', (message) => {
    const newMessage = {
      id: message.id,
      content: message.content,
      sent: message.senderId,
      senderName: message.senderName,
      avatarSender: message.avatarSender,
      isForwarded: true,
      time: message.time,
      type: message.type,
      media: message.media,
    }
    console.log('newmessage', newMessage);
    setMessages([...messages, newMessage]);
  });
  setForwarded([...forwarded, index]);
};
useEffect(() => {
  socket.on('unsend message', (a) => {
    console.log('unsend message', a);
    setMessages(messages.map(message => message.id === a.id ? { ...message, unsent: true } : message));
  });
}, [messages]);

const handleReaction = async (reaction, messageId) => {
  const res = await axiosClient.patch(`/react-message/${messageId}`, {
    data: {
      reaction,
    },
  });
  console.log('resasdasd', res.data.data.reactions);
  if (res.status === 200){
    socket.emit('react message', { chatRoomId: id.id, messageId, reactions: res.data.data.reactions });
  }
};
useEffect(() => {
  socket.on('react message', (message) => {
    console.log('react message', message);
    setMessages(messages.map(m => m.id === message.messageId ? { ...m, reactions: message.reactions } : m));
  });
}, [messages]);
const convertReaction = (reaction) => {
  switch (reaction) {
    case 'like':
      return '👍';
    case 'love':
      return '❤';
    case 'haha':
      return '😆';
    case 'wow':
      return '😮';
    case 'sad':
      return '😢';
    case 'angry':
      return '😠';
    default:
      return '';
  }
};
  return (
    <><Container fluid className="message-list-container p-1 h-100">
      <Row className='m-0'>
        <Col className='p-0'>
          <StyledListGroup ref={listGroupRef} className="message-container">
            {messages.length > 0 ? (
              messages.map((message, index) => (
                <ListGroup.Item key={index} className={`border-0 p-1 d-flex
                ${message.sent.toString() === JSON.parse(localStorage.getItem('userId')) ? 'justify-content-end' : 'justify-content-start'}`
              } style={{ backgroundColor: "unset" }}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* Chat Item  */}
                  <div className='d-flex flex-row'>
                  {message.sent.toString() != JSON.parse(localStorage.getItem('userId')) && <Image src={message.avatarSender} className={`mx-2
                          ${message.sent.toString() === JSON.parse(localStorage.getItem('userId')) ? 'order-2' : 'order-1'}`}
                          style={{ width: '40px', height: '40px' }}
                          roundedCircle/>}
                  <div className={`message-content d-inline-block border border-primary p-2 rounded position-relative
                          ${message.sent.toString() === JSON.parse(localStorage.getItem('userId')) ? 'order-1' : 'order-2'}`}>
                    {message.sent.toString() != JSON.parse(localStorage.getItem('userId')) && <p className='fst-italic m-0' style={{color: "rgb(24 95 71)"}}>{message.senderName}</p>}
                    <div>
                       {message.hided ? <div className="text-muted">Tin nhắn đã bị ẩn</div>:
                      message.unsent ? <div className="text-muted">Tin nhắn đã bị thu hồi</div>:
                      // message.media && <Image src={message.media.url} style={{ width: '100px', height: '100px' }} />
                      <div style={{ wordWrap: 'break-word', whiteSpace: 'pre-line' }}>
                        {message.isForwarded && <div className="text-muted">Forwarded</div>}
                        {message.type === "image" && ( <Image src={message.media.url} style={{ width: '300px', height: 'auto', borderRadius: '5px', display: 'block' }} />)}
                        {message.type === "video" && ( <video src={message.media.url} style={{ width: '300px', height: 'auto', borderRadius: '5px', display: 'block' }} controls />)}
                        {message.type === "file" && (
                          <a href={message.media.url} target="_blank" rel="noreferrer">
                            <embed src={message.media.url} style={{ width: '300px', height: 'auto', borderRadius: '5px', display: 'block' }} />
                            <div>{message.media.name}</div>
                          </a>
                          )}

                        {message.content.length > 60
                          ? message.content.length > 30
                            ? message.content.substring(0, 60).match(/.{1,30}/g).join("\n") + "..."
                            : message.content
                          : message.content}
                      </div>
                    }
                    </div>
                    <div className={`d-flex justify-content-between align-items-center mt-1 ${message.sent.toString() === JSON.parse(localStorage.getItem('userId')) ? "" : "flex-row-reverse"}`}>
                      <div className="d-flex align-items-center">
                        {!message.hided && !message.unsent && message.reactions && message.reactions.map((reaction, index) => {
                          if (index > 1) {
                            return null;
                          }
                          return (
                            <span
                              key={index}
                              className={`d-flex align-items-center ${!message.sent.toString() === JSON.parse(localStorage.getItem('userId')) && index < 1 && "ms-2"}`}
                              style={{ width: '20px', height: '20px' }}
                            >
                              {convertReaction(reaction.reaction)}
                            </span>
                          );
                        })}
                        <small className={`${message.sent.toString() === JSON.parse(localStorage.getItem('userId')) && "me-2"} ms-1`}>{!message.hided && !message.unsent && (message.reactions?.length > 0 && message.reactions?.length)}</small>
                      </div>
                      <small className="text-muted">{!message.hided && !message.unsent && (message.time)}</small>
                    </div>
                    {showDropdownIndex === index && !message.unsent && !message.hided && (
                      <><Dropdown className="position-absolute" style={message.sent.toString() === JSON.parse(localStorage.getItem('userId')) ? { left: '-30px', top: '20%' } : { right: '-30px', top: '20%' }}>
                        <Dropdown.Toggle
                          variant="link"
                          id="dropdown-settings"
                          className="px-2"
                        >
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          {message.sent.toString() === JSON.parse(localStorage.getItem('userId')) && (
                            <><Dropdown.Item>
                              <span>Pin</span>
                            </Dropdown.Item><Dropdown.Item onClick={() => handleUnsend(message.id)}>
                                <span>Unsend</span>
                              </Dropdown.Item></>
                          )}
                          <Dropdown.Item onClick={() => handleDelete(message.id)}>
                            <span>Delete</span>
                          </Dropdown.Item>
                          <Dropdown.Item onClick={() => handleHide(message.id)}>
                            <span>Hide</span>
                          </Dropdown.Item>
                          <Dropdown.Item onClick={() => handleForward(message.id)}>
                            <span>Forward</span>
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                      <Dropdown   drop='up' className="position-absolute dropdown2" style={message.sent.toString() === JSON.parse(localStorage.getItem('userId')) ? { left: '-60px', top: '20%' } : { right: '-60px', top: '20%' }}>
                      <Dropdown.Toggle variant="link" id="dropdown-settings" className="px-2"   bsPrefix="dropdown-toggle-custom">
                          <FontAwesomeIcon icon={faThumbsUp} />
                        </Dropdown.Toggle>
                        <style>
                        {`
                          .dropdown-toggle-custom {
                            background-color: transparent;
                          }
                          .dropdown2 .dropdown-item {
                            background-color: transparent;
                            border: none;
                            padding: 0.25rem;
                            font-size: 1.5rem;
                          }
                          .dropdown2 .dropdown-item:hover {
                            background-color: transparent;
                          }
                          .dropdown2 .dropdown-menu {
                            background-color: transparent;
                            padding: 0 10px;
                            border-radius: 30px;
                          }
                        `}
                        </style>
                          <Dropdown.Menu>
                            <div className="d-flex">
                            <Dropdown.Item onClick={() => handleReaction("love", message.id)}>
                              <span>❤</span>
                            </Dropdown.Item>
                            <Dropdown.Item onClick={() => handleReaction("haha", message.id)}>
                              <span>😆</span>
                            </Dropdown.Item>
                            <Dropdown.Item onClick={() => handleReaction("wow", message.id)}>
                              <span>😮</span>
                            </Dropdown.Item>
                            <Dropdown.Item onClick={() => handleReaction("sad", message.id)}>
                              <span>😢</span>
                            </Dropdown.Item>
                            <Dropdown.Item onClick={() => handleReaction("angry", message.id)}>
                              <span>😠</span>
                            </Dropdown.Item >
                            <Dropdown.Item onClick={() => handleReaction("like", message.id)}>
                              <span>👍</span>
                            </Dropdown.Item>
                            </div>
                          </Dropdown.Menu>
                        </Dropdown></>
                    )}
                  </div>
                </div>
                </ListGroup.Item>
              ))
            ) : (
              <div className="text-center">No messages</div>
            )}

            <div className="px-1 d-flex flex-row-reverse">
              <Image
                src="https://i.imgur.com/rsJjBcH.png"
                style={{ width: '20px', height: '20px' }} />
            </div>
          </StyledListGroup>
        </Col>
      </Row>
    </Container>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>User Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container fluid>
            {/* <Thumb>
    <ImageSidebarStyled2 src="https://i.imgur.com/rsJjBcH.png" rounded></ImageSidebarStyled2>
    <Icon src={icons.camera} rounded></Icon>
    </Thumb> */}
            <Row className="justify-content-center align-items-center h-100 w-100 d-flex">
              <Col lg="6" className="mb-4 mb-lg-0 w-100">
                <Card className="mb-3" style={{ borderRadius: '.5rem' }}>
                  {userInfo.map((user, index) => (
                    <Row className="g-0 p-2" key={index}>
                      <Col lg="2" className="d-flex justify-content-center align-items-center">
                        <Image
                          src={user.photoURL}
                          style={{ width: '50px', height: '50px' }}
                          roundedCircle
                        />
                      </Col>
                      <Col lg="8">
                        <Card.Body>
                          <Card.Text>{user.name}</Card.Text>
                        </Card.Body>
                      </Col>
                      <Col lg="2" className="d-flex justify-content-center align-items-center">
                        <Button variant="primary" disabled={forwarded.includes(index)} onClick={() => handleSendForward(index, user.idChatRoom)}>
                          {forwarded.includes(index) ? "sent" : "send"}
                        </Button>
                      </Col>
                    </Row>
                  ))}

                </Card>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal></>
  );
};

export default MessageList;
