import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import route from "../configs/route";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const ContainerStyled = styled(Container)`
  display: flex;
  justify-content: center;
`;

const FormGroupStyled = styled(Form.Group)`
  margin-bottom: 2rem;
  text-align: center;
`;

const ResetPassword = () => {
  const navigate = useNavigate();
  const { id, token } = useParams();
  const [password, setPassword] = useState();
  // axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ token, password });
    alert("Đổi mật khẩu thành công");
    axios
      .post(`http://localhost:3000/api/users/reset-password/${id}/${token}`, {
        password,
      })
      .then((res) => {
        if (res.data.Status === "Success") {
          navigate(route.home);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <ContainerStyled fluid="md">
      <Form onSubmit={handleSubmit} style={{ width: "40%" }}>
        <FormGroupStyled>
          <h3>Đặt lại mật khẩu</h3>
        </FormGroupStyled>

        <FormGroupStyled>
          <Form.Control
          autoComplete="off"
            size="lg"
            type="password"
            name="password"
            placeholder="Nhập mật khẩu mới"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroupStyled>

        {/* <FormGroupStyled>
          <Form.Control
            size="lg"
            type="text"
            name="newPasswordConfirm"
            placeholder="Nhập lại mật khẩu mới"
            // value={formData.resetPasswordPhone}
            // onChange={handleChange}
          />
        </FormGroupStyled> */}

        <FormGroupStyled>
          <Button variant="primary" type="submit">
            Xác nhận
          </Button>
        </FormGroupStyled>
      </Form>
    </ContainerStyled>
  );
};

export default ResetPassword;
