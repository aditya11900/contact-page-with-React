import Button from "../Button/Button"
import styles from "./Contact.module.css"
import { MdMessage } from 'react-icons/md';
import {FaPhoneAlt} from 'react-icons/fa';
import {HiMail} from 'react-icons/hi';
import { useState } from "react";
const ContactForm = () => {

  const [name, setName ] = useState("Aditya");
  const [email, setEmail ] = useState("aditya.12204244@lpu.in");
  const [text, setText ] = useState("Hello Your Form is submitted" );

const onSubmit = (event) => {

    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);

    console.log("name",event.target[0].value);
    console.log("email",event.target[1].value);
    console.log("text",event.target[2].value);

}


  return (
    <section className={styles.container}>
        <div className={styles.contactFormm}>
            <div className={styles.topButton}>
            <Button text="VIA SUPPORT CHAT" icon = { <MdMessage fontSize="24px" />} />
            <Button text="VIA CALL" icon = {< FaPhoneAlt fontSize="24px" />} />
            </div>
            <Button isOutline={true} text="VIA Email FORM" icon={<HiMail fontSize="24px" />} />

            <form onSubmit={onSubmit}>
                <div className={styles.formControl}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" />
                </div>
                <div className={styles.formControl}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" />
                </div>
                <div className={styles.formControl}>
                <label htmlFor="text">Text</label>
                <textarea  name="text" rows="8" />
                </div>

                <div style={{display:"flex",justifyContent:'end'}}>
                    <Button text="Submit" />
                    </div>
                    <div>
                      {name + " " + email + " " + text}   
                    </div>
            </form>


        </div>
        <div className={styles.contactImage}>
            <img src="/images/service.svg" alt="Conatct Image" />
        </div>

    </section>
  )
}

export default ContactForm