import '../styles/components/Contact.css';
import { useTranslation } from 'react-i18next';
import { FaPhoneAlt } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const ContactForm = () => {
  const { t } = useTranslation();
  return (
    <div className="contact-wrapper">
      <h1 className="contact-heading">
        <span className="highlight">{t("contact.title")}</span> {t("contact.formTitle")}
      </h1>
      <p className="contact-subheading">
        {t("contact.description")}
      </p>

      <form className="contact-form">
        <div className="form-row">
          <div className="form-group">
            <label>{t("contact.form.name")}</label>
            <input type="text" placeholder={t("contact.text.name")} />
          </div>
          <div className="form-group">
            <label>{t("contact.form.email")}</label>
            <input type="email" placeholder={t("contact.text.email")} />
          </div>
        </div>

        <div className="form-group">
          <label>{t("contact.form.message")}</label>
          <textarea rows="6" placeholder={t("contact.text.message")}></textarea>
        </div>

        <button className="submit-button" type="submit">{t("contact.form.submit")}</button>
      </form>

      <div className="contact-info">
        <div className="info-block">
          <i><FaPhoneAlt /></i>
          <div>
            <strong>{t("contact.info.phonenumber")}</strong><br />
            +123 456 7890
          </div>
        </div>

        <div className="info-block">
          <i><IoHome /></i>
          <div>
            <strong>{t("contact.info.address")}</strong><br />
            Phnom Penh, Cambodia
          </div>
        </div>

        <div className="info-block">
          <i><MdEmail /></i>
          <div>
            <strong>{t("contact.info.email")}</strong><br />
            rin@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
