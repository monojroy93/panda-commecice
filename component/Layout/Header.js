import { useState, useEffect } from "react";
import Link from "next/link";
function Header() {
  const [sidebarActive, setSidebarActive] = useState(false);
  const [navActive, setNavActive] = useState(false);


  const _toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <nav className='navigation'>
        {/* ================menu nav============= */}
        <div className={`${sticky ? "is-sticky" : ""} menu-nav `}>
          <div className='container'>
            <div className='menu-nav-inner'>
           
              <div
                className={`${sidebarActive ? "active" : ""
                  } menu-nav-inner-right`}
              >
                <div className='menu-nav-inner-right-inner'>
                  <div className='close-nav' onClick={_toggleSidebar}>
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path  d="M14.4039 22.705C14.1159 22.705 13.8279 22.5955 13.6089 22.375C13.1694 21.9355 13.1694 21.2245 13.6089 20.785L20.7969 13.597C21.2364 13.1575 21.9474 13.1575 22.3869 13.597C22.8264 14.0365 22.8264 14.7475 22.3869 15.187L15.1989 22.375C14.9799 22.5955 14.6919 22.705 14.4039 22.705" fill="#000" />
                      <path  d="M21.595 22.7093C21.307 22.7093 21.019 22.5998 20.8 22.3793L13.606 15.1838C13.1665 14.7443 13.1665 14.0333 13.606 13.5938C14.047 13.1543 14.758 13.1543 15.196 13.5938L22.39 20.7893C22.8295 21.2288 22.8295 21.9398 22.39 22.3793C22.171 22.5998 21.8815 22.7093 21.595 22.7093" fill="#000" />
                      <path  d="M11.4975 5.25C7.7025 5.25 5.25 7.8495 5.25 11.874V24.126C5.25 28.1505 7.7025 30.75 11.4975 30.75H24.4995C28.296 30.75 30.75 28.1505 30.75 24.126V11.874C30.75 7.8495 28.296 5.25 24.501 5.25H11.4975ZM24.4995 33H11.4975C6.414 33 3 29.433 3 24.126V11.874C3 6.567 6.414 3 11.4975 3H24.501C29.5845 3 33 6.567 33 11.874V24.126C33 29.433 29.5845 33 24.4995 33V33Z" fill="#000" />
                    </svg>
                  </div>
                  <ul className='nav-menu'>
                    <li className='nav-list' onClick={_toggleSidebar}>
                      <Link href={"/"}>
                        <a className='nav-link'>Home</a>
                      </Link>
                    </li>
                    <li className='nav-list'>
                      <a href='#' className='nav-link'>
                        Services <i className='icofont-rounded-down'></i>
                      </a>
                      <div className='dp-menu'>
                        <ul className='dp-menu-ul'>
                          <li onClick={_toggleSidebar}>
                            <Link href={"/"}>
                              <a className='dp-link'>Services-1</a>
                            </Link>
                          </li>
                          <li onClick={_toggleSidebar}>
                            <Link href={"/"}>
                              <a className='dp-link'>Services-2</a>
                            </Link>
                          </li>
                          <li onClick={_toggleSidebar}>
                            <Link href={"/"}>
                              <a className='dp-link'>Services-3</a>
                            </Link>
                          </li>
                          <li onClick={_toggleSidebar}>
                            <Link href={"/"}>
                              <a className='dp-link'>
                              Services-4
                              </a>
                            </Link>
                          </li>
                          <li onClick={_toggleSidebar}>
                            <Link href={"/"}>
                              <a className='dp-link'>Services-5</a>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className='nav-list' onClick={_toggleSidebar}>
                      <Link href={"/"}>
                        <a className='nav-link'>About Us</a>
                      </Link>
                    </li>

                    <li className='nav-list' onClick={_toggleSidebar}>
                      <Link href={"/"}>
                        <a className='nav-link'>Blog</a>
                      </Link>
                    </li>
                    <li className='nav-list' onClick={_toggleSidebar}>
                      <Link href={"/"}>
                        <a className='nav-link'>Contact</a>
                      </Link>
                    </li>
                    <li className='nav-list' onClick={_toggleSidebar}>
                      <a
                        href='https://wa.me/13025977087'
                        className='nav-link login-btn close-d'
                      >
                         Sign Up
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="logo-img">
                <img src="assets/images/logo.png" alt="" />
              </div>
              <div className='menu-nav-inner-left'>
                <form action=''>
                  <div className='search-bar'>
                    <input type='text' placeholder='Search Here......' />
                    <button type='submint'>
                     <img src="assets/images/search-icon.svg" alt="" />
                    </button>
                  </div>
                </form>
                <div className="sign-in-btn">
                <a href="#" >
                Sign Up
                </a>
                </div>
              </div>
              <div className='open-mobile-menu' onClick={_toggleSidebar}>
                <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="46.5085" height="46.5085" rx="10" fill="#FFFFFF" />
                  <rect x="9.31055" y="9.5249" width="27.8875" height="6.86469" fill="#000000" />
                  <rect x="9.31055" y="19.8218" width="27.8875" height="6.86469" fill="#000000" />
                  <rect x="9.31055" y="30.1187" width="27.8875" height="6.86469" fill="#000000" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        {/* ================menu nav end============= */}
      </nav>
    </>
  );
}
export default Header;
