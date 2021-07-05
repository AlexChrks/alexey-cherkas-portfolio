import MainLayout from '../components/MainLayout/MainLayout';
import Keyword from '../components/Keyword/Keyword';
import StyledButton from '../components/StyledButton/StyledButton'


import styles from '../styles/Home.module.scss';
function Home() {
  return (
    <MainLayout>
      <div className={styles.wrapper}>
        <h1 className={styles.name}>Alex Cherkas</h1>
        <p className={styles.whoAmI}>I'm a <Keyword/></p>
      </div>
    </MainLayout>
  )
}

export default Home;
