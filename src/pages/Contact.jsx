import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';

const EMAILJS_SERVICE = 'service_5gdv3sm';
const EMAILJS_PUBLIC_KEY = 'FP9W-m-V3x0Ef53xz';

function ContactModal({ type, onClose }) {
  const isSuccess = type === 'success';

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div
      className="contact-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      onMouseDown={onClose}
    >
      <div
        className={`contact-modal${isSuccess ? '' : ' contact-modal--error'}`}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="contact-modal-icon" aria-hidden="true">
          {isSuccess ? (
            <svg className="contact-modal-check" viewBox="0 0 24 24">
              <path d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <span style={{ fontSize: '2rem', lineHeight: 1 }}>!</span>
          )}
        </div>
        <h2 id="contact-modal-title" className="contact-modal-title">
          {isSuccess ? 'Message sent!' : 'Something went wrong'}
        </h2>
        <p className="contact-modal-message">
          {isSuccess
            ? 'Your email has been sent successfully. I\'ll connect with you soon.'
            : 'Sorry, your message could not be sent. Please try again in a moment.'}
        </p>
        <button type="button" className="contact-modal-btn" onClick={onClose}>
          Got it
        </button>
      </div>
    </div>
  );
}

export default function Contact({ ContactRef }) {
  const [modal, setModal] = useState(null);
  const [sending, setSending] = useState(false);

  const closeModal = () => setModal(null);

  const sendEmail = async (e) => {
    e.preventDefault();
    const form = e.target;
    setSending(true);

    try {
      await Promise.all([
        emailjs.sendForm(EMAILJS_SERVICE, 'admin_side', form, EMAILJS_PUBLIC_KEY),
        emailjs.sendForm(EMAILJS_SERVICE, 'user_side', form, EMAILJS_PUBLIC_KEY, {
          to_email: form.email.value,
        }),
      ]);
      form.reset();
      setModal('success');
    } catch (error) {
      console.error(error);
      setModal('error');
    } finally {
      setSending(false);
    }
  };

  return (
    <div ref={ContactRef}>
      {modal && <ContactModal type={modal} onClose={closeModal} />}

      <section className="section grid-bg" id="contact">
        <div className="container text-center">
          <p className="section-subtitle">I'm here to support — reach out anytime</p>
          <h6 className="section-title mb-5">Contact Me</h6>
          <form
            onSubmit={sendEmail}
            className="contact-form col-md-10 col-lg-8 m-auto"
          >
            <div className="form-row">
              <div className="form-group col-sm-6">
                <input type="text" name="name" size={50} className="form-control" placeholder="Your Name" required disabled={sending} />
              </div>
              <div className="form-group col-sm-6">
                <input type="email" name="email" className="form-control" placeholder="Enter Email" required disabled={sending} />
              </div>
              <div className="form-group col-sm-12">
                <textarea name="message" rows={6} className="form-control" placeholder="Write Something" required disabled={sending} />
              </div>
              <div className="form-group col-sm-12 mt-3">
                <input
                  type="submit"
                  value={sending ? 'Sending…' : 'Send Message'}
                  className="btn btn-outline-primary rounded"
                  disabled={sending}
                />
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
