import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Nav from '../Pages/Shared/Nav/NAv';

const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet />
            <Footer></Footer>
        </div>
    );
};

export default Main;