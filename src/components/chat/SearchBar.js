import Stack from 'react-bootstrap/Stack';
import { Image, Container, Row, Col, Card, Form  } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { icons } from "../../assets";
import axiosClient from "../../api/axiosClient";
import { useState } from 'react';
import { set } from 'lodash';

const SearchBar = () => {
  const [show, setShow] = useState(false);
  const [userInfo, setUserInfo] = useState({}); // eslint-disable-line no-unused-vars
  const [sent, setSent] = useState(false); // eslint-disable-line no-unused-vars
  const [isFriend, setIsFriend] = useState(false); // eslint-disable-line no-unused-vars
  const handleClose = () => {setShow(false);};
  
  const handleSearch = async (event) => {
    const searchTerm = event.target.value;
    if(searchTerm.length === 10){
      try{
        const res = await axiosClient.post("/search-user", {searchTerm});
        if(res.status === 200){
          const userData = res.data.data;
          setUserInfo(userData);
          console.log("userData", userData);
          console.log("userInfo", userInfo);
          if(userData.isFriend) setIsFriend(true);
          else if (userData.sent) setSent(true);
          else {
            setIsFriend(false);
            setSent(false);
          }
          setShow(true);
        }
      }catch(err){
        console.log(err);
      }
    }
  };
  const handleAddFriend = async () => {
    const res = await axiosClient.post("/add-friend", {userInfo});
    if(res.status === 200){
      console.log("Add friend success");
      setSent(true);
    }
  }
  return (
    <><Stack direction="horizontal" gap={1} className="p-3">
      <div>
        <Image
          src={icons.search}
          style={{ width: '25px', height: '25px' }} />
      </div>
      <Form.Control className="flex-grow-1 border-0" placeholder="Search..." onChange={handleSearch} />
      <div className="p-1">
        <Image
          src={icons.addFriend}
          style={{ width: '22px', height: '22px' }} />
      </div>
      <div className="p-1">
        <Image
          src={icons.addGroup}
          style={{ width: '25px', height: '25px' }} />
      </div>
    </Stack>
    <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>User Profile</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container fluid>
      <Row className="justify-content-center align-items-center h-100 w-100 d-flex">
        <Col lg="6" className="mb-4 mb-lg-0 w-100">
          <Card className="mb-3" style={{ borderRadius: '.5rem' }}>
            <Row className="g-0">
                <Col md="4" className="gradient-custom text-center px-0"
                  style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                  <Image src={userInfo.avatar}
                    alt="Avatar" className="my-4" style={{ width: '80px', cursor: 'pointer' }} fluid/>
                  <div className="d-flex flex-column justify-content-between  align-items-center">
                  <h5>{userInfo.name}</h5>
              <Button style={{backgroundColor: '',transition: 'all 0.3s ease',':hover': {backgroundColor: '#9E9E9E',opacity: '1'}
              }} className="d-flex justify-content-evenly w-75 align-items-center m-2" onClick={!isFriend || !sent ? handleAddFriend : null} disabled={isFriend || sent}>
                <span className="text-white">
                  {isFriend ? "Friend" : sent ? "Sent" : "Add friend"}
                </span>
              </Button>
                  </div>
                </Col>
              <Col md="8">
                <Card.Body className="p-4">
                  <h6>Information</h6>
                  <hr className="mt-0 mb-4" />
                  <Row className="pt-1">
                    <Col sm="12" className="mb-3">
                      <h6>Email</h6>
                      <p className="text-muted">{userInfo.email}</p>
                    </Col>
                    <Col sm="6" className="mb-3">
                      <h6>Phone</h6>
                      <p className="text-muted">{userInfo.phone}</p>  
                     
                    </Col>
                  </Row>

                  <hr className="mt-0 mb-4" />
                  <Row className="pt-1">
                    <Col sm="8" className="mb-3">
                      <h6>Dob</h6>
                          <p className="text-muted">{userInfo.dob}</p>
                    </Col>
                    <Col sm="4" className="mb-3">
                      <h6>Gender</h6>
                      <p className="text-muted">{userInfo.gender}</p>
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
};

export default SearchBar;