import React, {useEffect, useState} from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from "../components/chat/SideBar";
import SearchBar from "../components/chat/SearchBar";
import axiosClient from "../api/axiosClient";
const FriendList = () => {
  const [friends, setFriends] = useState([]);
  useEffect( () => {
    const fetchData  = async () => {
      const res = await axiosClient.get("/getAllFriend");
      console.log(res.data);
      setFriends(res.data);
    }
    fetchData();
  }, []);
  return (
  <Container fluid className='m-0 p-0'>
    <Row>
      <Col md={1} style={{width: '101px'}}>
        <SideBar />
      </Col>
      <Col md={10}>
        <Row><h1>Danh sách bạn bè</h1></Row>
        <div style={{ overflowY: 'auto', maxHeight: '730px' }}> {/* Add this line */}
          {friends.map((friend, index) => (
            <Row key={index}> {/* Add key prop to avoid warning */}
              <Card className="mb-3">
                <Row>
                  <Col md={2} className="d-flex align-items-center justify-content-center p-0">
                    <Card.Img variant="top" src={friend.photoURL} style={{width: '70px', height: '70px', borderRadius: "50px"}}/>
                  </Col>
                  <Col md={8}>
                    <Card.Body>
                      <Card.Title>{friend.displayName}</Card.Title>
                      <Card.Text>Email: {friend.email}</Card.Text>
                      <Card.Text>Số điện thoại: {friend.phoneNumber}</Card.Text>
                      {/* Bạn có thể thêm nhiều thông tin khác về bạn bè ở đây */}
                    </Card.Body>
                  </Col>
                  <Col md={2} className="d-flex align-items-center justify-content-center p-0">
                    <Button variant="danger">Huỷ kết bạn</Button>
                  </Col>
                </Row>
              </Card>
            </Row>
          ))}
        </div> {/* Add this line */}
      </Col>
    </Row>
  </Container>
);
};

export default FriendList;
