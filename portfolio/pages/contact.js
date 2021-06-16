import MainLayout from "../components/MainLayout/MainLayout";
import PageTitle from "../components/PageTitle/PageTitle";
import ContactsItem from "../components/ContactsContent/ContactsItem";

import contacts from "../constants/contacts";
import styles from '../styles/Contact.module.scss';
import FeedbackForm from "../components/ContactsContent/FeedbackForm/FeedbackForm";
function Contact() {
  return (
    <MainLayout>
      <div className={styles.scrollableWrapper}>
        <div className={styles.wrapper}>
          <PageTitle title='Get In' keyword=' Touch'/>
          
          <div className={styles.contactsContainer}>
            {contacts.map((contact, index) => <ContactsItem key={index} imgSrc={contact.imgSrc} imgAlt={contact.imgAlt} content={contact.content}/>)}
          </div>

          <div className={styles.formGenWrapper}>
            <div className={styles.formWrapper}>
              <FeedbackForm/>
            </div>
          </div>
        </div> 
      </div>
    </MainLayout>
  )
}

export default Contact;
