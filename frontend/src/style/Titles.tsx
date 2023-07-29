import React, { useEffect } from 'react';
import { TitleProps } from '../components/props/Item';

const PageTitle: React.FC<TitleProps> = ({ title, children }) => {
    useEffect(() => {
        document.title = `${title}`;
    }, [title]);

    return <>{children}</>;
};

export default PageTitle;
