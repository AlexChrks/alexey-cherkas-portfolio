import styles from './SkillBar.module.scss';

function SkillBar({skill, progress}) {
  return (
    <div className={styles.skillContainer}>
      <div className={styles.text}>
        <span>{skill}</span>
        <span>{`${progress}%`}</span>
      </div>

      <div className={styles.defaultBar}>
        <div className={styles.progressBar} style={{width: `${progress}%`}}></div>
      </div>
    </div>
  )
}

export default SkillBar
