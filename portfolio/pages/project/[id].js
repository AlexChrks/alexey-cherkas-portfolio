import {useRouter, useState} from 'next/router';
import works from '../../constants/works';
import MainLayout from '../../components/MainLayout/MainLayout';
import PageSubtitle from '../../components/PageSubtitle/PageSubtitle'

import styles from '../../styles/Project.module.scss';

function Project() {

  const router = useRouter();
  const {id} = router.query;
  let id1 = id;
  if (!id) {
    id1 = 1
  }
  const {imageSrc, technologies, timeInterval, title, description, deployLink} = works[id1];

  return (
    <MainLayout>
       <div className={styles.scrollableWrapper}>
          <div className={styles.wrapper}>
            <PageSubtitle text={title}/>
            <div className={styles.imageContainer}>
              <img className={styles.image} src={imageSrc}/>
            </div>
            <span>{timeInterval}</span>
            <span>{technologies}</span>
            <p className={styles.description}>{description}</p>
            {deployLink !== '' ? <a className={styles.link} href={deployLink} target="_blank">View deploy</a> : <p>NDA</p>}
            
          </div> 
       </div>
    </MainLayout>

  )
}

export default Project;
