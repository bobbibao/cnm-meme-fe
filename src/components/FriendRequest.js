import React, { useState } from "react";
import {  Dropdown, Button, Row, Col } from "react-bootstrap"; // Thêm Button từ react-bootstrap
import { ArrowLeft } from "react-bootstrap-icons"; // Import biểu tượng ArrowLeft từ react-bootstrap-icons
import styled from "styled-components";
import SideBar from "../components/chat/SideBar"; // Import SideBar component
import { AuthToken } from "../authToken";
import axiosClient from "../api/axiosClient";
import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "./chat/SearchBar";

const ContactCard = styled.div`
  border: 1px solid #d8d8d8;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContactInfo = styled.div`
  flex-grow: 1;
`;

const ContactName = styled.h4`
  font-weight: bold;
  margin-bottom: 5px;
`;

const ContactEmail = styled.p`
  color: #606770;
  margin-bottom: 5px;
`;

const ContactPhone = styled.p`
  color: #606770;
`;


const Contact = ({ name, email, phone, gender, onAction }) => {
  return (
    <ContactCard>
      <ContactInfo>
        <ContactName>{name}</ContactName>
        <ContactEmail>Email: {email}</ContactEmail>
        <ContactPhone>Số điện thoại: {phone}</ContactPhone>
        <ContactPhone>Giới tính: {gender}</ContactPhone>
      </ContactInfo>
      <Dropdown>
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          Thao tác
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => onAction("addFriend")}>Accept</Dropdown.Item>
          {/* <Dropdown.Item onClick={() => onAction("block")}>Chặn</Dropdown.Item> */}
          <Dropdown.Item onClick={() => onAction("delete")}>Decline</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </ContactCard>
  );
};


const FriendRequest = () => {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState([]);
  const { user } = useContext(AuthToken);

  useEffect(() => {
    const getFriendRequestList = async () => {
      await axiosClient.get("/getAllFriendRequest")
       .then((response) => {
          console.log(response.data.data);
          const friendRequests = response.data.data; 
          const extractedData = []; 

          for (const friend of friendRequests) {
            console.log(friend);
            const friendInfo = {
              username: friend.name,
              email: friend.email,
              phoneNumber: friend.phone,
              gender: friend.gender,
            };

            extractedData.push(friendInfo);
          }
          // và chị sẽ set cái mảng data này vào state contacts
          setContacts(extractedData);
        })
        .catch((error) => {
          console.error(error.message);
        });
    };
    getFriendRequestList();
  }, [user]);


  const handleAction = async (action, email) => {
    if (action === "block") {
      await axiosClient.post(process.env.REACT_APP_API_URL + "/block/blockUser",
         { email }
        )
        .then((response) => {
          console.log(response.data); 
        })
        .catch((error) => {
          console.error(error.message); 
        });
      console.log(`Chặn người dùng có email: ${email}`);
    } else if (action === "delete") {
      await axiosClient.post(
        process.env.REACT_APP_API_URL + "/friend/deleteFriendRequest",

          { email }
        )
        .then((response) => {
          console.log(response.data); 
        })
        .catch((error) => {
          console.error(error.message);
        });
    }else if (action === "addFriend") {
      console.log(`Kết bạn với người dùng có email: ${email}`);
      const res = await axiosClient.post("/accept-friend", { email });
      console.log(res.data);
    }
  };
  return (
    <Row>
      <Col md={1} style={{width: '101px'}}>
        <SideBar />
      </Col>
      <Col md={11}>
        <SearchBar />
        <Button variant="light" onClick={() => navigate(-1)}>
          <ArrowLeft />
        </Button>
        <h1>Danh sách yêu cầu kết bạn</h1>
        {contacts.map((contact, index) => (
          <Contact
            key={index}
            name={contact.username}
            email={contact.email}
            phone={contact.phoneNumber}
            gender={contact.gender}
            onAction={(action) => handleAction(action, contact.email)}
          />
        ))}
      </Col>
    </Row>
  );
};

export default FriendRequest;
