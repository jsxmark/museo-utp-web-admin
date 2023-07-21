import '../../styles/articles.css';
import '../../styles/dashboard.css'
import hamburguesa from '../../utils/quarter-pound'
import { useEffect } from 'react';
import NavBarItems from './NavBarItems';

function SideBarResponsive() {

    useEffect(() => {
        hamburguesa();
      }, []);

  return (
      <>
        <div className="quarter-pound-container">
            <div className="bars__menu">
                <span className="line1__bars-menu"></span>
                <span className="line2__bars-menu"></span>
                <span className="line3__bars-menu"></span>
            </div>
        </div>
        
        <nav className='nav-sidebar-responsive'>
            <NavBarItems/>
        </nav>
      </>
  )
}

export default SideBarResponsive;