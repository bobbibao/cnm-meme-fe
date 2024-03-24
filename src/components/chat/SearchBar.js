import Stack from 'react-bootstrap/Stack';
import { Image, Form } from 'react-bootstrap';
import { icons } from "../../assets";

const SearchBar = () => (
    <Stack direction="horizontal" gap={1} className="p-3">
      <div>
        <Image
          src={icons.search}
          style={{ width: '25px', height: '25px' }}
        />
      </div>
      <Form.Control className="flex-grow-1 border-0" placeholder="Search..." />
      <div className="p-1">
        <Image
          src={icons.addFriend}
          style={{ width: '22px', height: '22px' }}
        />
      </div>
      <div className="p-1">
        <Image
          src={icons.addGroup}
          style={{ width: '25px', height: '25px' }}
        />
      </div>
    </Stack>
);

export default SearchBar;