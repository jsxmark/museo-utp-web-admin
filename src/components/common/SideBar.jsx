import '../../styles/articles.css';
import '../../styles/dashboard.css'
import SideBarItems from './SideBarItems';

function SideBar() {

  return (
      <>
        <nav className='nav-sidebar'>
            <SideBarItems/>
        </nav>
      </>
  )
}

export default SideBar;