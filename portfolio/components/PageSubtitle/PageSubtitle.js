import styles from './PageSubtitle.module.scss'

function PageSubtitle({text}) {
  return <h5 className={styles.subtitle}>{text}</h5>
}

export default PageSubtitle
