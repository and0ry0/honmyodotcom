import Container from '../container'
import { CONST_SITE_NAME, CONST_MESSAGE, CONST_CREATOR, CONST_REPO_URL, CONST_BLOG_URL } from '../../options/constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-screen fixed left-0 bottom-0 text-center ">
      <Container>
        <div className="my-4 mx-auto flex flex-col md:flex-row leading-10 justify-around">
          <div>
            <a
              href={CONST_REPO_URL}
              className="inline hover:underline"
            >
              <FontAwesomeIcon className="w-4 mb-1 mr-1 inline" icon={['fab', 'github']} />View on GitHub
            </a>
          </div>
          <div>
            <a
              href={CONST_BLOG_URL} target="_blank"
              className="inline hover:underline"
            >
              <FontAwesomeIcon className="w-4 mb-1 mr-1 inline" icon={['fas', 'pen']} />Hatena Blog
            </a>
          </div>
          <div className="md:col-span-3">&copy; {CONST_CREATOR} 2021</div>
        </div>
      </Container>
    </footer>
  )
}
