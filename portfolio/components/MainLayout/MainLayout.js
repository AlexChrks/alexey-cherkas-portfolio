import styles from './MainLayout.module.scss';
import Navigation from '../Navigation/Navigation';

function MainLayout( { children } ) {
  return (
    <div className={styles.commonWrapper}>
      
      <div className={styles.constantPart}>
        <Navigation/>
      </div>

      <main className={styles.variablePart}>
        { children }
      </main>
    </div>

  )
}

export default MainLayout;
