import Keyword from "../../Keyword/Keyword";

import styles from './PersonalInfo.module.scss';

function PersonalInfo() {
  return (
    <section className={styles.personalInfoSection}>

      <div className={styles.summaryWrapper}>
        <h4>I'm Alex and I'm a <Keyword/></h4>
        <p>
        I have 2,5 years of experience with React, developing qualitative web applications.
Understanding of popular modern React workflows, such as Redux, Thunk. Good proficiency with JavaScript, HTML, CSS, and also TypeScript. I also have experience in building mobile apps using React Native.

        </p>
      </div>

    </section>
  )
}

export default PersonalInfo
