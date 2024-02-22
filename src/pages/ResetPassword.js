import  React, {useState}  from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
import route from "../configs/route";

const ContainerStyled = styled(Container)`
    display: flex;
    justify-content:center;
`

const FormGroupStyled = styled(Form.Group)`
    margin-bottom: 2rem;
    text-align: center;
`

const ResetPassword =() => {

    const [formData, setFormData] = useState({
        resetPasswordPhone: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault(); // Ngăn chặn việc tải lại trang khi submit form
        // Xử lý dữ liệu ở đây, ví dụ: gửi dữ liệu đến server, cập nhật trạng thái, vv.
        console.log(formData); // In dữ liệu vào console
        // Reset form nếu cần
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
                            <a href={route.resetPasswordConfirm} style={{textDecoration:"none"}}>Gửi lại</a>
                        </Col>
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