import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { IconButton } from '@mui/material';

const CaHeader = () => {
    return (
        <div className="caHeader">
            <AccountCircleOutlinedIcon fontSize='large' />
            {/* <img src="" alt="" /> */}
            <div className='caUserDetails'>
                <p className='caName'>Name</p>
                <p>availability</p>
            </div>
            <IconButton>
                <DeleteOutlineOutlinedIcon />
            </IconButton>
        </div>
    );
};

export default CaHeader;