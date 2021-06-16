import styles from './ExperienceItem.module.scss';

function ExperienceItem({timeInterval, position, company, gottenSkills}) {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.timeInterval}>{timeInterval}</div>
      <div className={styles.positionAndCompany}>{`${position}, ${company}`}</div>
      <div className={styles.skills}>{gottenSkills}</div>
    </div>
  )
}

export default ExperienceItem
