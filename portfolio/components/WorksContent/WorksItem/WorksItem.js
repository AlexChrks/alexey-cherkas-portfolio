import Link from 'next/link'

import styles from './WorksItem.module.scss';

function WorksItem({id, imageSrc, technologies, timeInterval, title}) {

  return (
    <Link href={`/project/${id}`} className={styles.item}> 
      <div className={styles.itemWrapper}>

        <div className={styles.imageContainer}>
          <img className={styles.image} src={imageSrc}/>
          <div className={styles.technologies}>{technologies}</div>
        </div>

        <span className={styles.timeInterval}>{timeInterval}</span>
        <h3>{title}</h3>
        
          <p>Read more</p> 
      </div>
    </Link>
  )
}

export default WorksItem
