import Image from 'next/image';
import Link from 'next/link'
import styles from './NavItem.module.scss';


export default function NavItem({title, isActive, id, handleClick, imgUrl, route}) {

    return (
      isActive 
      ? <Link href={route}>
          <li onClick={handleClick} id={id} className={styles.listItemActive}>
                <a>
                  <Image
                      src={imgUrl}
                      alt={title}
                      width={20}
                      height={20}
                  />
                  {title}
                </a>
          </li> 
        </Link>
      : <Link href={route}>
          <li className={styles.listItem} onClick={handleClick} id={id}>
                <a>
                  <Image
                      src={imgUrl}
                      alt={title}
                      width={20}
                      height={20}
                  />
                  {title}
                </a>          
          </li>
        </Link>
    )
}