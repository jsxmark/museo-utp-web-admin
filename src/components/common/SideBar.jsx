import '../../styles/articles.css';
import '../../styles/dashboard.css'
import NavBarItems from './NavBarItems';

function SideBar() {

  return (
      <>
        <nav className='nav-sidebar'>
            <NavBarItems/>
        </nav>
      </>
  )
}

export default SideBar;