import styles from './StyledButton.module.scss';

function StyledButton({text}) {
  return (
    <a href='/alexey-cherkas-cv.pdf' download className={styles.button}>
      <span>{text}</span>
    </a>
  )
}

export default StyledButton
