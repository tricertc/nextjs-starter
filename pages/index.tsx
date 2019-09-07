import 'isomorphic-fetch'
import { NextApiRequest } from 'next'
import { Container, Jumbotron } from 'react-bootstrap'
import BaseLayout from '~components/layouts/BaseLayout'

interface IProps {
  features: string[]
}

/**
 * The home page.
 *
 * @export
 * @returns
 */
export default function IndexPage (props: IProps) {
  return (
    <BaseLayout>
      <Container>
        <Jumbotron>
          <h1>Next.js Starter</h1>
          <p className="lead">
            This is a really basic starter template with some of the common "initial commit"
            libraries and configurations already set up.
          </p>
          <ul>
            {props.features.map((feature, key) => (
              <li key={key}>
                {feature}
              </li>
            ))}
          </ul>
          <a href="https://github.com/tricertc/nextjs-starter" className="btn btn-primary">View Repo</a>
        </Jumbotron>
      </Container>
    </BaseLayout>
  )
}

IndexPage.getInitialProps = async ({ req }: { req: NextApiRequest }) => {
  let features: string[]

  const requestUrl = req
    ? req.headers.referer + 'api/features'
    : '/api/features'

  await fetch(requestUrl)
    .then<{features: string[]}>(res => res.json())
    .then(result => features = result.features)
    .catch(() => features = [])

  return { features }
}
