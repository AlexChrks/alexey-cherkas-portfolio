import MainLayout from "../components/MainLayout/MainLayout";
import PageTitle from "../components/PageTitle/PageTitle";
import styles from '../styles/Works.module.scss';
import WorksItem from "../components/WorksContent/WorksItem/WorksItem";
import works from "../constants/works";
function Works() {
  return (
    <MainLayout>
      <div className={styles.scrollableWrapper}>
        <div className={styles.wrapper}>

          <PageTitle title='Creative' keyword=' Works'/>

          <div className={styles.worksContainer}>
            {works.map((work, index) => 
            <WorksItem 
            key={index}
            id={work.id}
            imageSrc={work.imageSrc} 
            technologies={work.technologies}
            timeInterval={work.timeInterval}
            title={work.title}
            />)}
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default Works
