import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_ijapiga',
      'template_8nwkcrd',
      formRef.current,
      '4s4rbNLIEW_FuomMP'
    ).then(
      () => {
        alert("✅ Message sent successfully!");
        formRef.current.reset();
      },
      (error) => {
        alert("❌ Failed to send. Try again.");
        console.error(error);
      }
    );
  };

  return (
    <section className="contact" id="contact">
      <motion.div
        className="contact-box"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Contact Me</h2>
        <form ref={formRef} onSubmit={sendEmail}>
          <input name="user_name" type="text" placeholder="Your Name" required />
          <input name="user_email" type="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        
      </motion.div>
    </section>
  );
};

export default Contact;
