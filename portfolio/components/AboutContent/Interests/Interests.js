import PageSubtitle from '../../PageSubtitle/PageSubtitle';
import InterestsItem from './InterestsItem/InterestsItem';
import interestsConstant from '../../../constants/interests';

import styles from './Interests.module.scss';

function Interests() {
  return (
    <section className={styles.interestsSection}>
      <PageSubtitle text='Interests'/>

      <div className={styles.itemsContainer}>
        {interestsConstant.map((interest, index) => <InterestsItem key={index} title={interest.title} iconSrc={interest.iconSrc}/>)}
      </div>
    </section>
  )
}

export default Interests
