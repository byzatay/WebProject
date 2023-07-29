import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import { Chip } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import '../../index.css';
import { StyledSearch, StyledSearchIconWrapper, StyledInputBase, StyledAppBar, StyledToolbar } from '../../style/StyledComponents';
import { BottomNavbarProps } from '../props/Item';

const BottomNavbar: React.FC<BottomNavbarProps> = ({ auth }) => {

    const navigate = useNavigate();

    const handleClick = (label: string) => {
        if (auth) {
            label += '-admin';
        }
        navigate(label);
    };

    return (
        <StyledAppBar>
            <StyledToolbar>
                <div>
                    <Chip icon={<HomeOutlinedIcon />} label="Home" variant="outlined" onClick={() => handleClick('/')} sx={{ marginRight: '5px' }} />
                    <Chip icon={<FeedOutlinedIcon />} label="News" variant="outlined" onClick={() => handleClick('/news')} sx={{ marginRight: '5px' }} />
                    <Chip icon={<CampaignOutlinedIcon />} label="Announcements" variant="outlined" onClick={() => handleClick('/announcement')} sx={{ marginRight: '5px' }} />
                </div>

                <div>
                    <StyledSearch>
                        <StyledSearchIconWrapper>
                            <SearchIcon />
                        </StyledSearchIconWrapper>
                        <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
                    </StyledSearch>
                </div>
            </StyledToolbar>
        </StyledAppBar>
    );
};

export default BottomNavbar;
