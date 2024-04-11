import  React, {useState}  from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
import route from "../configs/route";
import axiosClient from "../api/axiosClient";

const ContainerStyled = styled(Container)`
    display: flex;
    justify-content:center;
`

const FormGroupStyled = styled(Form.Group)`
    margin-bottom: 2rem;
    text-align: center;
`

const ForgotPassword =() => {
    const [email, setEmail] = useState("");
   

    const handleSubmit = (event) => {
        event.preventDefault(); 
        console.log({email}); 
        alert("Vui lòng kiểm tra email của bạn");
        axiosClient.post(`/users/forgot-password`, {
          email,
        });
       
      };

      

    return (
      <ContainerStyled fluid="md">
        <Form onSubmit={handleSubmit}>
          <FormGroupStyled>
            <h4>Khôi phục mật khẩu Meme để kết nối với ứng dụng</h4>
          </FormGroupStyled>
          <FormGroupStyled>
            <h1 style={{ color: "var(--primary)" }}>MEME</h1>
          </FormGroupStyled>

          <FormGroupStyled controlId="resetPasswordPhone">
            <Form.Control
              size="lg"
              type="text"
              name="resetPasswordPhone"
              placeholder="Nhập email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroupStyled>

          <FormGroupStyled>
            <Row>
              <Col>
                <Button variant="primary" type="submit">
                  Tiếp theo
                </Button>
              </Col>
            </Row>
          </FormGroupStyled>
        </Form>
      </ContainerStyled>
    );
}

export default ForgotPassword;