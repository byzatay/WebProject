import { Box, ButtonBase, InputBase } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';

// Bottom Navbar 

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
    top: '40px',
    position: 'fixed',
    zIndex: 2
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


// Home

export const StyledImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 400,
    flex: 1,
    [theme.breakpoints.down('sm')]: {
        width: '100% !important',
        height: 100,
    },
    '&:hover, &.Mui-focusVisible': {
        zIndex: 1,
        '& .MuiImageBackdrop-root': {
            opacity: 0.15,
        },
        '& .MuiImageMarked-root': {
            opacity: 0,
        },
        '& .MuiTypography-root': {
            border: '4px solid currentColor',
        },
    },
}));

export const StyledImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: '40%',
    backgroundPosition: 'center 40%',
});

export const StyledImage = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
}));

export const StyledImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
}));

export const StyledImageMarked = styled('span')(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
}));

export const StyledCenteredBox = styled(Box)({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    width: '100%',
    padding: '20px',
});

export const images = [
    {
        url: '/img/news.jpg',
        title: 'News',
        width: '40%',
    },
    {
        url: 'img/announcements.jpg',
        title: 'Announcements',
        width: '30%',
    },
];