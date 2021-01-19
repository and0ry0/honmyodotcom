import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faYoutube} from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt, faPen, faBorderAll} from '@fortawesome/free-solid-svg-icons'

export default function addIcon() {
  library.add(faGithub, faYoutube, faExternalLinkAlt, faPen, faBorderAll)
}