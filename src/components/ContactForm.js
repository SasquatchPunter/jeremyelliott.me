import data from "../data.json";
import { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";

/**
 *  Basic form for email contacts
 * @param {{className: string}} param0
 */
function Form({ className }) {
  const baseClass = "flex flex-col justify-center";
  const fieldsClass = "px-2 text-stone-600";

  return (
    <div className={[baseClass, className].join(" ")}>
      <h4 className="text-center">Reach out to me!</h4>
      <form
        className="flex flex-col gap-4 justify-center"
        action={data.form_submit.url}
        method="POST"
      >
        <input
          className={fieldsClass}
          type="text"
          name="name"
          id="name"
          required
          placeholder="Full Name"
        />
        <input
          className={fieldsClass}
          type="email"
          name="email"
          id="email"
          required
          placeholder="Email"
        />
        <textarea
          className={fieldsClass}
          type="text"
          name="message"
          id="message"
          placeholder="Message"
        />
        <button type="submit">Send</button>

        <input type="hidden" name="_subject" value={data.form_submit.subject} />
        <input
          type="hidden"
          name="_captcha"
          value={data.form_submit.captcha_required}
        />
      </form>
    </div>
  );
}

/**
 *  Closeable dropdown component that displays the basic form
 * @param {{className: string}} param0
 */
function Dropdown({ className }) {
  const baseClass = "bg-stone-600 text-stone-200 p-2 flex flex-col";
  const [open, setOpen] = useState(false);

  return (
    <div className={[baseClass, className].join(" ")}>
      <button className="w-8 h-8 self-end" onClick={() => setOpen(!open)}>
        <HiOutlineMail className="w-full h-full" />
      </button>
      {open && <Form />}
    </div>
  );
}

const ContactForm = { Form, Dropdown };

export default ContactForm;
