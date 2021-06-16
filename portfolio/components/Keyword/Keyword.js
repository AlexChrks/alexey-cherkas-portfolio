import {useRef, useEffect} from 'react';
import styles from './Keyword.module.scss';

function Keyword() {
  const developer = useRef(null);
  const designer = useRef(null);
  
  const changeTitle = () => {
    developer.current.classList.toggle(styles.invisible);
    designer.current.classList.toggle(styles.invisible);
  }

  // useEffect(() => {
  //   setInterval(changeTitle, 5000)
  // }, [])


  return (
    <span className={styles.container}>
      <strong ref={developer}>developer</strong>
      <strong ref={designer} className={styles.invisible}>designer</strong>
    </span>
  )
}

export default Keyword
