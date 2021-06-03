import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'

import { body } from '../body.css'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="https://use.typekit.net/prs6khl.css" />
        </Head>
        <body className={body}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
