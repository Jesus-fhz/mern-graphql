import React, { useContext, useState } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/auth';


function NavigationBar(){

  const { user, logout} = useContext(AuthContext);
  const [activeItem, setActiveItem] = useState('home');
 
    const  handleItemClick = (e, { name }) =>  setActiveItem(name);
    const navBar = user ? (
      <Menu pointing secondary size="massive" color="blue">
      <Menu.Item
        name={user.username}
        active
        as={Link}
        to="/"
      />
      <Menu.Menu position='right'>
        <Menu.Item
            name="Logout"
            onClick={logout}
            as={Link}
            to="/login"
        />
      </Menu.Menu>
    </Menu>
    ) : (
      <Menu pointing secondary size="massive" color="blue">
      <Menu.Item
        name='home'
        active={activeItem === 'home'}
        onClick={handleItemClick}
        as={Link}
        to="/"
      />
      <Menu.Menu position='right'>
        <Menu.Item
            name='login'
            active={activeItem === 'login'}
            onClick={handleItemClick}
            as={Link}
            to="/login"
        />
        <Menu.Item
          name='register'
          active={activeItem === 'register'}
          onClick={handleItemClick}
          as={Link}
          to="/register"
        />
      </Menu.Menu>
    </Menu>
    )

    return navBar
  }

export default NavigationBar