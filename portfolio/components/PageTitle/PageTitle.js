import styles from './PageTitle.module.scss';

function PageTitle({title, keyword}) {
  return (
    <h3 className={styles.aboutMe}>{title}<b className={styles.meWord}>{keyword}</b></h3>
  )
}

export default PageTitle
