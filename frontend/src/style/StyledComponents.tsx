import { styled } from '@mui/material/styles';

export const StyledAppBar = styled('div')(({ theme }) => ({
    width: '100%',
    height: '50px',
    borderTop: '5px solid #3e9fb3',
    backgroundColor: '#f3f3f3',
}));

export const StyledToolbar = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    marginLeft: '30px',
}));

export const StyledBox = styled('div')(({ theme }) => ({
    width: '100%',
    height: '40px',
    position: "static"
}));


