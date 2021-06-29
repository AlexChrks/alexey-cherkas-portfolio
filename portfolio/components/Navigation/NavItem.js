import Image from 'next/image';
import Link from 'next/link'
import styles from './NavItem.module.scss';


export default function NavItem({title, isActive, id, handleClick, imgUrl, route}) {

    return (
        <Link href={route}>
          <li onClick={handleClick} id={id} className={isActive ? styles.listItemActive : styles.listItem}>
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
