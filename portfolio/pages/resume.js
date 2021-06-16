import StyledButton from "../components/StyledButton/StyledButton";
import MainLayout from "../components/MainLayout/MainLayout";
import PageTitle from "../components/PageTitle/PageTitle";
import ExperienceList from "../components/ResumeContent/ExperienceList/ExperienceList";
import Skills from "../components/ResumeContent/Skills/Skills";
import styles from '../styles/Resume.module.scss';

function Resume() {
  return (
    <MainLayout>
      <div className={styles.scrollableWrapper}>
        <div className={styles.wrapper}>
          <PageTitle title='Working' keyword=' Process'/>
          <ExperienceList/>
          <StyledButton text='Download CV'/>
          <Skills/>
        </div>
      </div>
    </MainLayout>
  )
}

export default Resume
