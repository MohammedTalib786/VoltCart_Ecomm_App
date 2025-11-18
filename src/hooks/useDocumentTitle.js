import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useDocumentTitle = (title) => {
    const location = useLocation();

    useEffect(() => {
        document.title = title;
    }, [title, location.pathname]);
};

export default useDocumentTitle;
