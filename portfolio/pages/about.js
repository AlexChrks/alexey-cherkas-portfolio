import MainLayout from "../components/MainLayout/MainLayout";
import PageTitle from "../components/PageTitle/PageTitle";
import Services from "../components/AboutContent/Services/Services";
import Sertificates from "../components/AboutContent/Sertificates/Sertificates";
import Interests from "../components/AboutContent/Interests/Interests";

import styles from '../styles/About.module.scss';
import PersonalInfo from "../components/AboutContent/PersonalInfo/PersonalInfo";

function About() {
  return (
    <MainLayout>
      <div className={styles.scrollableWrapper}>
        <div className={styles.wrapper}>
          <PageTitle title='About' keyword=' me'/>

          <PersonalInfo/>
          <Services/>
          <Interests/>
          <Sertificates/>
        </div>
      </div>

    </MainLayout>
  )
}

export default About
