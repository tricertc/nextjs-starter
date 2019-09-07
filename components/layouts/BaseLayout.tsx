import Head from 'next/head'

export interface IBaseLayoutProps {
  children: React.ReactNode
  title?: string
}

/**
 * The base layout.
 *
 * @export
 * @param {IBaseLayoutProps} props
 * @returns
 */
export default function BaseLayout (props: IBaseLayoutProps) {
  return (
    <>
      <Head>
        <title>{props.title || process.env.DEFAULT_TITLE}</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/4.3.1/sketchy/bootstrap.min.css"
        />
      </Head>
      {props.children}
    </>
  )
}
