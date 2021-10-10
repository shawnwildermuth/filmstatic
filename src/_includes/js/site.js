import "./plugins";
import "./template";
import gdrp from "./gdpr";
import contactform from "./contactform";

window.addEventListener("DOMContentLoaded", () => {
  gdrp();
  contactform();
  FontAwesomeConfig.autoReplaceSvg = "nest";
});

