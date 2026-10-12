import SideNav from './SideNav';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <SideNav />
      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

export default Layout;

