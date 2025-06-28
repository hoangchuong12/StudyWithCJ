import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

// Cấu hình tốc độ và kiểu
NProgress.configure({ showSpinner: false, trickleSpeed: 100 });

const LoadingProgressBar = () => {
    const location = useLocation();

    useEffect(() => {
        NProgress.start();

        const timer = setTimeout(() => {
            NProgress.done();
        }, 500); // Giả lập thời gian load

        return () => clearTimeout(timer);
    }, [location]);

    return null;
};

export default LoadingProgressBar;
