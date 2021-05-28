import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'

import { body } from '../global.css'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/assets/favicon.ico" />
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
