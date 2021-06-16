import {useState} from 'react';
import NavItem from './NavItem';
import navInitState from '../../constants/navigationInitialState';
import styles from './Navigation.module.scss';



export default function Navigation() {
  const [state, setState] = useState(navInitState)

  const handleClick = (e) => {
    const {id} = e.currentTarget;
    const arr = state.map((elem) => {
      if (elem.id !== +id) {
        elem.isActive = false;
        return elem
      } else {
        elem.isActive = true;
        return elem
      }
    })
    setState(arr)
  }

  return (
    <nav className={styles.navigation}>
      <ul>
        {state.map((elem) => 
        <NavItem 
        key={elem.id} 
        title={elem.title} 
        isActive={elem.isActive} 
        id={elem.id} 
        handleClick={handleClick}
        imgUrl={elem.imgUrl}
        route={elem.route}/>)}
        
      </ul>
    </nav>
  );
}
