import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { ProfileIcon, MessagesIcon, LinkedinIcon, GithubIcon } from '../../../assets/icons';


const ContactForm = ({user, handleSubmit}) => (
  <div className='card-col-info-contact'>
    <form onSubmit={ handleSubmit }>
      <Field component='textarea' name='message' /> 
      <button type='submit' />
    </form>
    <div className='contact-btns'>
      <div className='contact-btn' data-style='1'><ProfileIcon /></div>
      <div className='contact-btn' data-style='2'><GithubIcon /></div>
      <div className='contact-btn' data-style='3'><LinkedinIcon /></div>
      <div className='contact-btn' data-style='4'><MessagesIcon /></div>
    </div>
  </div>
);

export const CardContact = reduxForm({
  form: 'contactMessage'
})(ContactForm)