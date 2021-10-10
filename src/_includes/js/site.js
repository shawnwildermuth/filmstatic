import "./plugins";
import "./main";
import gdrp from "./gdpr";
import contactform from "./contactform";

window.addEventListener("DOMContentLoaded", () => {
  gdrp();
  contactform();
});

