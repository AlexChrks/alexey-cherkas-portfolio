import PageSubtitle from "../../PageSubtitle/PageSubtitle";
import Service from "./Service/Service";

import styles from './Services.module.scss';

function Services() {
  return (
    <section className={styles.servicesSection}>
      <PageSubtitle text='What I Do'/>

      <div className={styles.columns}>
        <div className={styles.columnWrapper}>
          <Service 
          title='Creative design' 
          iconSrc='/creativity.svg'
          text='Web design is what creates the overall look and feel when you’re using a website. It’s the process of planning...'/>

          <Service 
          title='Web Development' 
          iconSrc='/code.svg'
          text='Pure and quality code using React.js'/>
        </div>

        <div className={styles.columnWrapper}>
          <Service 
          title='Brand Identity' 
          iconSrc='/telegram.svg'
          text='Help your brand to be incredible'/>

          <Service 
          title='Figma' 
          iconSrc='/figma.svg'
          text='Handle with Figma to construct awesome UI'/>
        </div>
      </div>
    </section>
  )
}

export default Services
