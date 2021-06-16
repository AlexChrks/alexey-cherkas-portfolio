import styles from './ExperienceList.module.scss';
import ExperienceItem from './ExperienceItem/ExperienceItem';

import experience from '../../../constants/experience';

function ExperienceList() {
  return (
    <section className={styles.experienceWrapper}>
      {experience.map((item, index) => <ExperienceItem key={index} timeInterval={item.timeInterval} position={item.position} company={item.company} gottenSkills={item.gottenSkills}/>)}
    </section>
  )
}

export default ExperienceList
