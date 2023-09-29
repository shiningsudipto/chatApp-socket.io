import { IconButton } from "@mui/material";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const SSearchSection = () => {
    return (
        <div className="searchBar">
            <IconButton>
                <SearchOutlinedIcon />
            </IconButton>
            <input placeholder="search" className="searchInput" />
        </div>
    );
};

export default SSearchSection;