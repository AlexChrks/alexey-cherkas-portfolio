import Image from "next/dist/client/image";
import styles from './Service.module.scss';

function Service({iconSrc, title, text}) {
  return (
    <div className={styles.serviceWrapper}>
      <Image
        src={iconSrc}
        alt={title}
        width={35}
        height={35}
      />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

export default Service
