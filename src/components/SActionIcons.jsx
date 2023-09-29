import { IconButton } from "@mui/material";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'; import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';

const SActionIcons = () => {
    return (
        <div className="sidebarActionIcons">
            <div>
                <IconButton>
                    <AccountCircleOutlinedIcon />
                </IconButton>
            </div>
            <div>
                <IconButton>
                    <PersonAddAltOutlinedIcon />
                </IconButton>
                <IconButton>
                    <GroupAddOutlinedIcon />
                </IconButton>
                <IconButton>
                    <AddCircleOutlineOutlinedIcon />
                </IconButton>
                <IconButton>
                    <DarkModeOutlinedIcon />
                </IconButton>
            </div>
        </div>
    );
};

export default SActionIcons;