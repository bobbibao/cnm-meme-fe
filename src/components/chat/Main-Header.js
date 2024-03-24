import React from "react";
import { ListGroup, Image} from 'react-bootstrap';
import Stack from 'react-bootstrap/Stack';
import { icons } from "../../assets";
import styled from "styled-components";

const Header = () => (
    <div className="p-2 border-start">
        <Stack direction="horizontal" gap={2}>
            <div className="flex-grow-1">
                <ListGroup.Item
                as="div"
                className="d-flex justify-content-between align-items-start"
                action
                >
                    <DivImage>
                        <ImageSidebarStyled
                        src="https://i.imgur.com/rsJjBcH.png"
                        roundedCircle
                        />
                    </DivImage>
                    <div className="me-auto">
                        <div className="fw-bold">Subheading</div>
                        Cras justo odio
                    </div>
                </ListGroup.Item>
            </div>
            <div className="p-1">
                <Image
                src={icons.addGroup}
                style={{ width: '25px', height: '25px' }}
                />
            </div>
            <div className="p-1">
                <Image
                src={icons.search}
                style={{ width: '25px', height: '25px' }}
                />
            </div>
            <div className="p-1">
                <Image
                src={icons.video_call}
                style={{ width: '25px', height: '25px' }}
                />
            </div>
        </Stack>
    </div>
  );

const ImageSidebarStyled = styled(Image)`
width: 60%;
height: 60%;
`;

const DivImage = styled.div`
  max-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px 0 3px 0;
`;

export default Header;