import { dom, library, config, icon } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

export default function () {
  config.autoReplaceSvg = "nest";
  library.add(fas.faPhone,
    fas.faEnvelope, 
    fas.faEnvelopeOpen, 
    fas.faRss,
    fas.faMapMarkedAlt, 
    fas.faUser, 
    fas.faQuestion, 
    fas.faPen, 
    fas.faPlay, 
    fas.faAngleRight, 
    fas.faAngleDown, 
    fas.faAngleUp, 
    fas.faStar,
    fas.faClock,
    fas.faCalendar, 
    fas.faSquare,
    fab.faImdb,
    fab.faTwitter,
    fab.faFacebookF,
    fab.faInstagram,
    fab.faApple,
    fab.faGoogle,
    fab.faSpotify,
    fab.faDeezer,
    fab.faAmazon,
    fab.faMastodon);
  dom.i2svg();
}