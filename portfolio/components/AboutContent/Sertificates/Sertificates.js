import PageSubtitle from '../../PageSubtitle/PageSubtitle';
import Carousel from "react-multi-carousel";
import responsive from "../../../constants/carouselResponsive";

import Image from "next/dist/client/image";

import sertificates from '../../../constants/sertificates';
import "react-multi-carousel/lib/styles.css";
import styles from './Sertificates.module.scss';

function Sertificates() {
  return (
    <section className={styles.sertificatesSection}>
      <PageSubtitle text='Sertificates'/>
      <div className={styles.sertificatesWrapper}>

        <Carousel 
          swipeable={true}
          draggable={true}
          showDots={false}
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={5000}
          infinite={true}
          customTransition="1000ms ease-in-out"
          transitionDuration={1000}
          arrows={false}>

          {sertificates.map((sertificate, index) => 
            <div className={styles.sertificate} key={index}>
              <img className={styles.sertificateImage} src={sertificate.imgSrc} draggable={false}/>
            </div>
          )}  
        </Carousel>
      </div>
    </section>
  )
}

export default Sertificates
