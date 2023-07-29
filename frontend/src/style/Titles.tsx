import React, { useEffect } from 'react';

interface CustomPageTitleProps {
    title: string;
    children: React.ReactNode;
}

const CustomPageTitle: React.FC<CustomPageTitleProps> = ({ title, children }) => {
    useEffect(() => {
        document.title = `${title}`;
    }, [title]);

    return <>{children}</>;
};

export default CustomPageTitle;
