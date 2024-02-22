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

const FormHeaderStyled = styled.h4`
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  margin-bottom: 30px;
`

const LinkStyled = styled.a`
  margin-left:10px;
  text-decoration: none;
`

const LoginForm =() => {
    return (
      <FormStyled>
        <FormHeaderStyled>vui lòng đăng nhập</FormHeaderStyled>

        <FloatingLabel
        controlId="floatingInput"
        label="Email hoặc số điện thoại"
        className="mb-3"
        >
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>

        <FloatingLabel
        controlId="floatingPassword"
        label="Mật khẩu"
        className="mb-3"
        >
          <Form.Control type="password" placeholder="Mật khẩu" />
          <Form.Text id="passwordHelpBlock" muted>
            Mật khẩu của bạn phải từ 8-20 ký tự, không chứa ký tự khoảng trắng
          </Form.Text>
        </FloatingLabel>

        <Form.Group className="mb-3">
          <Button variant="primary" type="submit">
                Đăng nhập
          </Button>
          <LinkStyled href={route.resetPassword} style={{marginLeft:"20px"}}>Quên mật khẩu</LinkStyled>
        </Form.Group>

        <Form.Group>
          Bạn chưa có tài khoản?
          <LinkStyled href={route.register}>Đăng ký</LinkStyled>
        </Form.Group>
      </FormStyled>
    )
}

export default LoginForm;
