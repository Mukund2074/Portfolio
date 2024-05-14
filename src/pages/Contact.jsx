import React from 'react';
import emailjs from 'emailjs-com';

export default function Contact({ ContactRef }) {

  const sendEmail = (e) => {
    e.preventDefault();

    // Send email to your email address
    emailjs.sendForm('service_5gdv3sm', 'admin_side', e.target, 'FP9W-m-V3x0Ef53xz')
      .then((result) => {
        console.log(result.text);
       // alert('Your message has been sent successfully to your email!');
      }, (error) => {
        console.log(error.text);
        alert('Sorry, an error occurred while sending email to your email address. Please try again later.');
      });

    // Send email to the email address entered by the user
    emailjs.sendForm('service_5gdv3sm', 'user_side', e.target, 'FP9W-m-V3x0Ef53xz', {
      to_email: e.target.email.value // Pass the user's email address as a parameter
    })
      .then((result) => {
        console.log(result.text);
        alert('Your message has been sent successfully to the ' + e.target.email.value + ' email!');

      }, (error) => {
        console.log(error.text);
        alert('Sorry, an error occurred while sending email to the user\'s email address. Please try again later.');
      });

    e.target.reset();
  };

  return (
    <div ref={ContactRef}>
      <section className="section" id="contact">
        <div className="container text-center">
          <p className="section-subtitle">How can you communicate?</p>
          <h6 className="section-title mb-5">Contact Me</h6>
          {/* contact form */}
          <form
            onSubmit={sendEmail}
            className="contact-form col-md-10 col-lg-8 m-auto"
          >
            <div className="form-row">
              <div className="form-group col-sm-6">
                <input type="text" name="name" size={50} className="form-control" placeholder="Your Name" required />
              </div>
              <div className="form-group col-sm-6">
                <input type="email" name="email" className="form-control" placeholder="Enter Email" required />
              </div>
              <div className="form-group col-sm-12">
                <textarea name="message" rows={6} className="form-control" placeholder="Write Something" required />
              </div>
              <div className="form-group col-sm-12 mt-3">
                <input type="submit" value="Send Message" className="btn btn-outline-primary rounded" />
              </div>
            </div>
          </form>{/* end of contact form */}
        </div>{/* end of container */}
      </section>
    </div>
  );
}
