import axios from "axios";
import Pristine from "pristinejs";

let config = {
  // class of the parent element where the error/success class is added
  classTo: 'form-box',
  errorClass: 'form-box-error-border', 
  successClass: 'has-success',
  // class of the parent element where error text element is appended
  errorTextParent: 'form-box',
  // type of element to create for the error text
  errorTextTag: 'div',
  // class of the error text element
  errorTextClass: 'form-box-error-message' 
};

export default function () {
  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    const theForm = new Pristine(contactForm, config);
    const fields = [
      document.getElementById("fullName"), 
      document.getElementById("email"), 
      document.getElementById("phone"), 
      document.getElementById("subject"), 
      document.getElementById("msg")
    ];
    const status = document.getElementById("status");
    function setStatus(msg) {
      status.innerText = msg;
    }

    function pullMail() {
      const mail = {};
      for (let x = 0; x < fields.length; ++x) {
        const item = fields[x];
        mail[item.id] = item.value;
      }
      return mail;
    }

    // Validate on typing
    // for (let x = 0; x < fields.length; ++x) {
    //   fields[x].addEventListener("keyup", () => theForm.validate);
    // }

    contactForm.addEventListener("submit", async function (e) {
      e.preventDefault();
      if (theForm.validate()) {
        try {
          setStatus("Sending...");
          const mail = pullMail();
          debugger;
          const result = await axios.post("https://api.wilderminds.com/api/messenger?template=ContactTemplate.txt", mail);
          if (result.data) {
            // Show Sent and clear form
            setStatus("Message Sent.");
            contactForm.reset();
          } else {
            // Show Error
            setStatus("Failed to send message.");
          }
        } catch {
          // Show Error
          setStatus("Failed to send message.");
        }
      } else {
        setStatus("Please correct the errors.");
      }
    });
  }
}
