import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import { Chip } from '@mui/material';
import '../../index.css';
import { StyledAppBar, StyledToolbar } from '../../style/StyledComponents';
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
        <StyledAppBar style={{ top: '40px', position: 'fixed', width: '100%', zIndex: 2 }}>
            <StyledToolbar>
                <div>
                    <Chip icon={<HomeOutlinedIcon />} label="Home" variant="outlined" onClick={() => handleClick('/')} sx={{ marginRight: '5px' }} />
                    <Chip icon={<FeedOutlinedIcon />} label="News" variant="outlined" onClick={() => handleClick('/news')} sx={{ marginRight: '5px' }} />
                    <Chip icon={<CampaignOutlinedIcon />} label="Announcements" variant="outlined" onClick={() => handleClick('/announcement')} sx={{ marginRight: '5px' }} />
                </div>
            </StyledToolbar>
        </StyledAppBar>

    );
};

export default BottomNavbar;
