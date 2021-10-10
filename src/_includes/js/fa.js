import { library, dom, config } from "@fortawesome/fontawesome-svg-core";
import {fas } from "@fortawesome/free-solid-svg-icons";

export default function () {
  config.autoReplaceSvg = "nest";
  library.add(fas);
  dom.watch();
}
