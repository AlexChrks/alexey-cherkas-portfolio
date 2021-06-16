import Keyword from "../../Keyword/Keyword";

import styles from './PersonalInfo.module.scss';

function PersonalInfo() {
  return (
    <section className={styles.personalInfoSection}>

      <div className={styles.summaryWrapper}>
        <h4>I'm Alex and <Keyword/></h4>
        <p>
          Hi! My name is Alexey Cherkas. I am a Web Developer, and I'm very passionate and dedicated to my work. With 2 years of learning experience, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process.
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
