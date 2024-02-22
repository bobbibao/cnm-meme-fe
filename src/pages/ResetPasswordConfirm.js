import  React, { useState }  from "react";
import { Container, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
import route from "../configs/route";

import OtpInput from 'react-otp-input';

const ContainerStyled = styled(Container)`
    display: flex;
    justify-content:center;
`

const FormGroupStyled = styled(Form.Group)`
    margin-bottom: 2rem;
    text-align: center;
`

const ResetPasswordConfirm =() => {
    const [otp, setOtp] = useState('');

    return (
        <ContainerStyled fluid="md">
            <Form>
                <FormGroupStyled>
                    <h3>Nhập mã xác nhận</h3>
                    <Form.Text>Mã xác thực sẽ được gửi qua email hoặc số điện thoại</Form.Text>
                </FormGroupStyled>

                <FormGroupStyled>
                    <OtpInput
                        value={otp}
                        onChange={setOtp}
                        numInputs={5}
                        inputStyle={{
                            height: "3rem",
                            margin:" 0 1rem",
                            fontSize: "3rem",
                            borderRadius: "4px",
                            border:" unset",
                            borderBottom: "1px solid rgba(0,0,0,1)"
                        }}
                        renderSeparator={<span>-</span>}
                        renderInput={(props) => <input {...props} />}
                    />
                </FormGroupStyled>

                <FormGroupStyled>
                    <p>Bạn chưa nhận được?</p>
                    <a href={route.newPassword} style={{textDecoration:"none"}}>Gửi lại</a>
                </FormGroupStyled>

                <FormGroupStyled>
                    <Button variant="primary" type="submit">
                            Tiếp theo
                    </Button>
                </FormGroupStyled>
            </Form>
        </ContainerStyled>
        )
}

export default ResetPasswordConfirm;