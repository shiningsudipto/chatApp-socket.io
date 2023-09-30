import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { IconButton } from '@mui/material';

const CaInputArea = () => {
    return (
        <div className='caInputArea'>
            <textarea type="text" className='caInputField' placeholder='your message' />
            <IconButton className='caSendBtn'>
                <SendOutlinedIcon />
            </IconButton>
        </div>
    );
};

export default CaInputArea;