import Keyword from "../../Keyword/Keyword";

import styles from './PersonalInfo.module.scss';

function PersonalInfo() {
  return (
    <section className={styles.personalInfoSection}>

      <div className={styles.summaryWrapper}>
        <h4>I'm Alex and <Keyword/></h4>
        <p>
          Hi! My name is Alexey Cherkas. I am a Web Developer, and I'm very passionate and dedicated to my work. With 2 years of experience, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process.
        </p>
      </div>

    </section>
  )
}

export default PersonalInfo
