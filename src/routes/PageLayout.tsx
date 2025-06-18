import { Outlet } from '@modern-js/runtime/router';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/css/style.css';

export default function PageLayout() {
    return (
        <div className="app-container">
            <div className="header-container">
                <Header />
            </div>
            <div className="content-container">
                <Outlet />
            </div>
            <div className="footer-container">
                <Footer />
            </div>
        </div>
    );
}
