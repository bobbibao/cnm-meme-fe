import React from "react";
import { Image, Form } from 'react-bootstrap';
import Stack from 'react-bootstrap/Stack';
import { icons } from '../../assets';

const InputArea = () => (
    <div className="">
        <Stack direction="horizontal" gap={3} className="pe-sm-3 border">
            <Form.Control className="py-3 me-auto border-0" placeholder="Nhập tin nhắn tới {Name}..." />
                <Image
                src={icons.voice}
                style={{ width: '25px', height: '25px' }}
                />
                <Image
                src={icons.image}
                style={{ width: '25px', height: '25px' }}
                />
        </Stack>
    </div>
  );

export default InputArea;