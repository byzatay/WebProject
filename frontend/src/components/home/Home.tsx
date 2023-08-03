import * as React from 'react';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import {
    StyledCenteredBox, StyledImageButton, StyledImageSrc,
    StyledImageBackdrop, StyledImage, StyledImageMarked, images
} from '../../style/StyledComponents';

const Home: React.FC = () => {
    const navigate = useNavigate();

    const handleClick = async (title: string) => {
        if (title === 'News') {
            navigate('/news');
        }
        else {
            navigate('/announcement');
        }
    };

    return (
        <StyledCenteredBox>
            {images.map((image) => (
                <StyledImageButton
                    focusRipple
                    key={image.title}
                    style={{
                        width: image.width,
                    }}
                >
                    <StyledImageSrc style={{ backgroundImage: `url(${image.url})` }} />
                    <StyledImageBackdrop className="MuiImageBackdrop-root" />
                    <StyledImage onClick={() => handleClick(image.title)}>
                        <Typography
                            component="span"
                            variant="subtitle1"
                            color="inherit"
                            sx={{
                                position: 'relative',
                                p: 4,
                                pt: 2,
                                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                            }}
                        >
                            {image.title}
                            <StyledImageMarked className="MuiImageMarked-root" />
                        </Typography>
                    </StyledImage>
                </StyledImageButton>
            ))}
        </StyledCenteredBox>
    );
}

export default Home;
