import Link from 'next/link'

import styles from './WorksItem.module.scss';

function WorksItem({id, imageSrc, technologies, timeInterval, title}) {

  return (
    <div className={styles.itemWrapper}>

      <div className={styles.imageContainer}>
        <img className={styles.image} src={imageSrc}/>
        <div className={styles.technologies}>{technologies}</div>
      </div>

      <span className={styles.timeInterval}>{timeInterval}</span>
      <h3>{title}</h3>
      <Link href={`/project/${id}`}>
        <p>Read more</p>
      </Link>
      
    </div>
  )
}

export default WorksItem
