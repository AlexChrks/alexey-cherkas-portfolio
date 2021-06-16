import Image from 'next/dist/client/image';

import styles from './ContactsItem.module.scss';

function ContactsItem({imgSrc, imgAlt, content}) {
  return (
    <div className={styles.wrapper}>
      <Image
        src={imgSrc}
        alt={imgAlt}
        width={35}
        height={35}
        loading="eager"
      />
      <p>{content}</p>
    </div>
  )
}

export default ContactsItem
