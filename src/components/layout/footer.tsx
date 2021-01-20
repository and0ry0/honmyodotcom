import Container from '../container'
import { CONST_SITE_NAME, CONST_MESSAGE, CONST_CREATOR, CONST_REPO_URL, CONST_BLOG_URL} from '../../libs/constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mt-auto">
      <div className="block w-screen text-red-400 pt-6">
          <Container>
            <div className="font-bold mt-2 text-2xl leading-loose">
              <div className="text-3xl">{CONST_MESSAGE}</div>
              <Link href="/"><a className="hover:underline text-5xl md:text-6xl uppercase tracking-widest">{CONST_SITE_NAME}</a></Link>
            </div>
          </Container >
        </div>
      <Container>
        <div className="my-4 mx-auto text-center flex flex-col leading-10 md:flex-row justify-around">
          <div><a
            href={CONST_REPO_URL}
            className="inline hover:underline"
          >
            <FontAwesomeIcon className="w-4 mb-1 mr-1 inline" icon={['fab', 'github']} />View on GitHub
            </a>
          </div>
          <div><a
            href={CONST_BLOG_URL} target="_blank"
            className="inline hover:underline"
          >
            <FontAwesomeIcon className="w-4 mb-1 mr-1 inline" icon={['fas', 'pen']} />Hatena Blog
            </a>
          </div>
          <span className="md:col-span-3">&copy; {CONST_CREATOR} 2021</span>
        </div>
      </Container>
    </footer>
  )
}
