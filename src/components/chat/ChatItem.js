import React from "react";
import { ListGroup, Badge, Image} from 'react-bootstrap';
import styled from "styled-components";

const ImageSidebarStyled = styled(Image)`
  width: 60%;
  height: 60%;
`;

const DivImage = styled.div`
  max-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px 0 3px 0;
`;


const ChatItem  = (index) => {
  return (
    <ListGroup.Item
      as="div"
      // link={index[1]}
      className="d-flex justify-content-between align-items-start border-0 px-2 py-3"
      action
      // eventKey={index[1]}
    >
      <DivImage>
        <ImageSidebarStyled
          src="https://i.imgur.com/rsJjBcH.png"
          roundedCircle
        />
      </DivImage>
      <div className="me-auto">
        <div className="fw-bold">Thuỳ Dương</div>
        <div>Cras justo odio</div>
        
      </div>
      <div className="d-flex flex-column">
        <span className="p-1" style={{ fontSize: '12px' }}>
          1 giờ
        </span>
        <div className="d-flex justify-content-center align-items-center">
          <Badge bg="danger" pill className="p-1" style={{ fontSize: '8px' }}>
            14
          </Badge>
        </div>
      </div>
      <style>
        {`
          .list-group-item.active {
            background-color: #F2F2F2;
            color: #444444;
            margin: 0 !important;
          }
        `}
      </style>
      <input type="text" value="thuyduong" className="d-none"/>
    </ListGroup.Item>
  );
};

export default ChatItem;