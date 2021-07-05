import styles from './StyledButton.module.scss';

function StyledButton({text}) {
  return (
    <a href='/cv-alexey-cherkas.docx' download className={styles.button}>
      <span>{text}</span>
    </a>
  )
}

export default StyledButton
