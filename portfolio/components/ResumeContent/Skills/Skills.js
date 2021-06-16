import PageSubtitle from '../../PageSubtitle/PageSubtitle';
import SkillBar from './SkillBar/SkillBar';
import styles from './Skills.module.scss';

import programmingSkills from '../../../constants/programmingSkills';
import languageSkills from '../../../constants/languagesSkills';

function Skills() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.programmingSkills}>
        <PageSubtitle text='Programming Skills'/>
        {programmingSkills.map((item, index) => <SkillBar key={index} skill={item.skill} progress={item.progress}/>)}
      </div>

      <div className={styles.languageSkills}>
        <PageSubtitle text='Language Skills'/>
        {languageSkills.map((item, index) => <SkillBar key={index} skill={item.skill} progress={item.progress}/>)}
      </div>
    </div>
  )
}

export default Skills
