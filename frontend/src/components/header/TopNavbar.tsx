import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import { StyledToolbar, StyledBox } from '../../style/StyledComponents';
import { TopNavbarProps } from '../props/Item';

const TopNavbar: React.FC<TopNavbarProps> = ({ auth, onAuthChange }) => {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newAuth: boolean = event.target.checked;
        onAuthChange(newAuth);
    };

    return (
        <StyledBox>
            <AppBar sx={{ backgroundColor: '#bddeca', height: '40px' }}>
                <StyledToolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "#0c2e3a" }}>
                        Atai
                    </Typography>
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={auth}
                                    onChange={handleChange}
                                    aria-label="login switch"
                                />
                            }
                            label={auth ? 'Admin' : 'User'}
                        />
                    </FormGroup>
                    <AdminPanelSettingsOutlinedIcon sx={{ marginRight: "15px" }} />
                </StyledToolbar>
            </AppBar>
        </StyledBox>
    );
}

export default TopNavbar;
