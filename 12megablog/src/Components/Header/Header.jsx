import React from 'react';
import { Container, Logo, LogoutBtn } from '../index';
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: '/',
      active: true
    },
    {
      name: "Login",
      slug: '/login',
      active: !authStatus,
    },
    {
      name: "SignUp",
      slug: '/signup',
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: '/all-posts',
      active: authStatus,
    },
    {
      name: "Add Posts",
      slug: '/add-posts',
      active: authStatus,
    },
  ]
  return (
    <>
      <header className='py-3 shadow bg-blue-400'>
        <Container>
          <nav className='flex'>
            <div className='mr-5'>
              <Link to='/'>
                <Logo width='80px' />
              </Link>
            </div>
            <ul className='flex ml-auto'>
              {navItems.map((item) =>
                item.active ? (
                  <li key={item.name}>
                    <button onClick={() => navigate(items.slug)}
                      className='block px-5 py-5 duration-300  bg-blue-700 text-white
                 hover:bg-red-800 rounded-full'>
                      {item.name}
                    </button>
                  </li>
                ) : null
              )}
              {authStatus && (
              <li>
                <LogoutBtn />
              </li>
              )}
            </ul>
          </nav>
        </Container>
      </header>
    </>
  )
}

export default Header
