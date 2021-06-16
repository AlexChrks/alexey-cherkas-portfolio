import { useState } from 'react';
import dynamic from 'next/dynamic'
import emailjs from 'emailjs-com';

import styles from './FeedbackForm.module.scss'

import initialFormState from '../../../constants/initialFormState';

function FeedbackForm() {


  // const emailjs = dynamic(() => import('emailjs-com'), { ssr: false })
  // console.log(emailjs)

  const [formState, setFormState] = useState(initialFormState);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormState({
      ...formState,
      [name]: { value: value }
    })
  } 

    function sendEmail(e) {
    e.preventDefault();
    console.log(e.target)
    emailjs.sendForm('service_oga5efs', 'template_nbz2t79', e.target, 'user_jjhXEtR76EtBCHAqIhEZT')
      .then((result) => {
          setFormState(initialFormState)
      });
  }

  return (
    <form className={styles.feedbackForm} onSubmit={sendEmail}>
      <input 
      className={styles.inputName} 
      placeholder='Name' 
      type="text" 
      name="user_name" 
      value={formState.user_name.value} 
      onChange={handleChange}/>

      <input 
      className={styles.inputEmail} 
      placeholder='E-mail' 
      type="email" 
      name="user_email" 
      value={formState.user_email.value} 
      onChange={handleChange}/>

      <textarea 
      className={styles.inputMessage} 
      placeholder='Message'
      type='text' 
      name="message" 
      value={formState.message.value}  
      onChange={handleChange}/>

      <button type='submit'>Send Message</button>
    </form>
  )
}

export default FeedbackForm
