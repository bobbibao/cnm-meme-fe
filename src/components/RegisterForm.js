import  React  from "react";
import { Container, Row, Col, Form, Button, FormGroup } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
import route from "../configs/route";

const FormStyled = styled(Form)`
  border: 1px solid var(--primary);
  padding: 20px;
`

const LinkStyled = styled.a`
  margin-left:10px;
  text-decoration: none;
`

const RegisterForm =() => {
    return (
      <FormStyled>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="registerFirstNameInput">
            <Form.Label>Họ</Form.Label>
            <Form.Control type="text" placeholder="Nguyễn Văn" />
          </Form.Group>

          <Form.Group as={Col} controlId="registerLastNameInput">
            <Form.Label>Tên</Form.Label>
            <Form.Control type="text" placeholder="A" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="registerEmailInput">
          <Form.Label>Email</Form.Label>
          <Form.Control placeholder="nguyenvana@gmail.com" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="registerPasswordInput">
          <Form.Label>Mật khẩu</Form.Label>
          <Form.Control placeholder="Mật khẩu" />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="registerDateInput" className="mb-3">
            <Form.Label>Ngày sinh</Form.Label>
            <Form.Control type="date"/>
          </Form.Group>

          <Form.Group as={Col} controlId="registerPhoneInput">
            <Form.Label>Số điện thoại</Form.Label>
            <Form.Control placeholder="0901234567"/>
          </Form.Group>



          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Giới tính</Form.Label>
            <Row>
              <Col md="2">
                <Form.Check
                type="radio"
                label="Nam"
                name="registerRadios"
                id="maleRadio"
                />
              </Col>
              <Col md="2">
                <Form.Check
                  type="radio"
                  label="Nữ"
                  name="registerRadios"
                  id="femaleRadio"
                />
              </Col>
            </Row>

          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
          Đăng ký
        </Button>
        <Form.Group className="mt-3">
          Bạn đã có tài khoản?
          <LinkStyled href={route.home}>Đăng nhập</LinkStyled>
        </Form.Group>
      </FormStyled>
    )
}

export default RegisterForm;
