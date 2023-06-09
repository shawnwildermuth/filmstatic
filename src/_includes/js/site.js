import "./plugins";
import "./template";
import gdrp from "./gdpr";
import contactform from "./contactform";
import faconfig from "./faconfig";
import utils from "./utils";

window.addEventListener("DOMContentLoaded", () => {
  gdrp();
  contactform();
  faconfig();
  utils();
});

