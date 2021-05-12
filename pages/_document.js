// pages/_document.js
import { ColorModeScript } from "@chakra-ui/react"
export default class Document extends NextDocument {
  static getInitialProps(ctx) {
    return NextDocument.getInitialProps(ctx)
  }
  render() {
    return (
      <Html>
        <Head />
        <body>
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}