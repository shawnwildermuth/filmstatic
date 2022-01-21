import "./plugins";
import "./template";
import gdrp from "./gdpr";
import contactform from "./contactform";
import faconfig from "./faconfig";

window.addEventListener("DOMContentLoaded", () => {
  gdrp();
  contactform();
  faconfig();
});

