import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { alpha } from '@mui/material/styles';

export const StyledSearch = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.black, 0.25),
    },
    marginRight: '15px',
    width: '100%',
    height: '35px',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

export const StyledSearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'black',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

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


