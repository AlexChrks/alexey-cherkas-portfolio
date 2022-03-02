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

      <div className={styles.personalDataWrapper}>
        <ul>
          <li><label>Birthday:</label><span>27.05.1997</span></li>
          <li><label>Age:</label><span>24</span></li>
          <li><label>Adress:</label><span>Melezha str.14, Gomel, Belarus</span></li>
          <li><label>Email:</label><span>alexey.cherkas1997@gmail.com</span></li>
          <li><label>Phone:</label><span>+375292177762</span></li>
        </ul>
      </div>

    </section>
  )
}

export default PersonalInfo
