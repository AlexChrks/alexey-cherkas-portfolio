import Image from 'next/dist/client/image';
import styles from './InterestsItem.module.scss';

function InterestsItem({title, iconSrc}) {
  return (
    <div className={styles.item}>
      <Image
        src={iconSrc}
        alt={title}
        width={35}
        height={35}
      />
      {title}
    </div>
  )
}

export default InterestsItem
