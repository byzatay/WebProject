import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import { Chip } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import { StyledAppBar, StyledInputBase, StyledSearch, StyledSearchIconWrapper, StyledToolbar } from '../../style/StyledComponents';
import { BottomNavbarProps } from '../props/Item';

const BottomNavbar: React.FC<BottomNavbarProps> = ({ auth, onKeywordChange }) => {

    const [searchKeyword, setSearchKeyword] = React.useState('');

    const handleKeywordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchKeyword(event.target.value);
    };

    const handleInputKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            onKeywordChange(searchKeyword);
        }
    };

    const handleClearSearch = () => {
        setSearchKeyword('');
        onKeywordChange('');
    };

    const navigate = useNavigate();

    const handleClick = (label: string) => {
        if (auth && label != "/home") {
            label += '-admin';
        }
        navigate(label);
    };

    return (
        <StyledAppBar>
            <StyledToolbar>
                <div>
                    <Chip icon={<HomeOutlinedIcon />} label="Home" variant="outlined" onClick={() => handleClick('/home')} sx={{ marginRight: '5px' }} />
                    <Chip icon={<FeedOutlinedIcon />} label="News" variant="outlined" onClick={() => handleClick('/news')} sx={{ marginRight: '5px' }} />
                    <Chip icon={<CampaignOutlinedIcon />} label="Announcements" variant="outlined" onClick={() => handleClick('/announcement')} sx={{ marginRight: '5px' }} />
                </div>

                <div>
                    <StyledSearch>
                        <StyledSearchIconWrapper>
                            <SearchIcon />
                        </StyledSearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            value={searchKeyword}
                            onChange={handleKeywordChange}
                            onKeyPress={handleInputKeyPress} />
                        {searchKeyword && (
                            <ClearIcon onClick={handleClearSearch} sx={{ marginBottom: '4px', marginRight: '4px' }} />
                        )}
                    </StyledSearch>
                </div>
            </StyledToolbar>
        </StyledAppBar>

    );
};

export default BottomNavbar;
