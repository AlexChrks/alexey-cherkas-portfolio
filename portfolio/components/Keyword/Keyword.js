import styles from './Keyword.module.scss';

function Keyword() {

  return (
    <span className={styles.container}>
      <strong ref={developer}>developer</strong>
    </span>
  )
}

export default Keyword
