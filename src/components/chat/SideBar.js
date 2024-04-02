import  React, { useState, useEffect }  from "react";
import { Image, Container, Row, Col, Card  } from 'react-bootstrap';
import { ChatDotsFill, PersonVcard } from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
// import { useState } from "react";
// import { icons } from "../../assets";
// import axiosClient from '../../api/axiosClient';

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
// const Icon = styled(Image)`
//     width: 25px;
//     position: absolute;
//     bottom: -10px;
//     left: 70px;

// `
// const ImageSidebarStyled2 = styled(Image)`
//     width: 20%;
//     position: absolute;
//     bottom: -20px;

// `
// const Thumb = styled.div`
//     background-image: url('https://i.imgur.com/rsJjBcH.png');
//     background-size: cover;
//     background-position: center;
//     height: 200px;
//     width: 100%;
//     border-radius: 10px;
//     margin-bottom: 20px;
//     position: relative;
// `

const SideBar = () => {
    // console.log(123);
    const [show, setShow] = useState(false);
    // const [userInfo, setUserInfo] = useState({});
    const handleClose = () => setShow(false);
    const handleShow =  () => {
        setShow(true)}
    ;
    // useEffect(() => {
    //     const fetchUserInfo = async () => {
    //         try {
    //             const res = await axiosClient.get("/user-profile/");
    //             console.log(res.data);
    //             setUserInfo(res.data);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     };
    //     fetchUserInfo()
    // },[]);
    return (
        <><SideBarStyled>
            <ItemSidebarStyled style={{ cursor: "pointer" }} onClick={handleShow}>
                <ImageSidebarStyled
                    src="https://i.imgur.com/rsJjBcH.png"
                    roundedCircle />
            </ItemSidebarStyled>

            <ItemSidebarStyled>
                <ChatDotsFill size={35} color="white" />
            </ItemSidebarStyled>

            <ItemSidebarStyled>
                <PersonVcard size={35} color="white" />
            </ItemSidebarStyled>
        </SideBarStyled>
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
            <Row className="g-0">
              <Col md="4" className="gradient-custom text-center"
                style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                <Image src="https://i.imgur.com/rsJjBcH.png"
                  alt="Avatar" className="my-4" style={{ width: '80px' }} fluid />
                <h5>DisplayName</h5>
                {/* <p>Birthday</p> */}
              </Col>
              <Col md="8">
                <Card.Body className="p-4">
                  <h6>Information</h6>
                  <hr className="mt-0 mb-4" />
                  <Row className="pt-1">
                    <Col sm="12" className="mb-3">
                      <h6>Email</h6>
                      <p className="text-muted">thuyduong@gmail.com</p>
                    </Col>
                    <Col sm="6" className="mb-3">
                      <h6>Phone</h6>
                      <p className="text-muted">123 456 789</p>
                    </Col>
                  </Row>

                  <hr className="mt-0 mb-4" />
                  <Row className="pt-1">
                    <Col sm="6" className="mb-3">
                      <h6>Gender</h6>
                      <p className="text-muted">Nu</p>
                    </Col>
                    <Col sm="6" className="mb-3">
                      <h6>Dob</h6>
                      <p className="text-muted">10/10/2000</p>
                    </Col>
                  </Row>

                  <div className="d-flex justify-content-start">
                    <a href="#!"><i className="fab fa-facebook me-3"></i></a>
                    <a href="#!"><i className="fab fa-twitter me-3"></i></a>
                    <a href="#!"><i className="fab fa-instagram me-3"></i></a>
                  </div>
                </Card.Body>
              </Col>
            </Row>
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
        </Modal>
        </>
    );
}

export default SideBar;