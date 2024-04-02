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

const ResetPassword =() => {
    const [email, setEmail] = useState("");
    const [formData, setFormData] = useState({
        resetPasswordPhone: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault(); 
        console.log({email}); 
        alert("Vui lòng kiểm tra email của bạn");
        axiosClient.post(`/users/forgotPassword`, {
          email
        });
        setFormData({
          resetPasswordPhone: '',
        });
      };

      const handleChange = (event) => {
        const { name, value } = event.target;
        console.log(event.target);
        console.log(name);
        console.log(value);
        setFormData({
          ...formData,
          [name]: value,
        });
      };

    return (
        <ContainerStyled fluid="md">
            <Form onSubmit={handleSubmit}>
                <FormGroupStyled>
                    <h4>Khôi phục mật khẩu Meme để kết nối với ứng dụng</h4>
                </FormGroupStyled>
                <FormGroupStyled>
                    <h1 style={{color:"var(--primary)"}}>MEME</h1>
                </FormGroupStyled>

                <FormGroupStyled controlId="resetPasswordPhone">
                    <Form.Control size="lg" type="text"
                    name="resetPasswordPhone"
                    placeholder="Nhập số điện thoại"
                    value={formData.resetPasswordPhone}
                    onChange={handleChange} />

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
        )
}

export default ResetPassword;