import React from 'react';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';


export default class MyDocument extends Document {
  render() {
    return (
       <Html lang="en">
        <Head>
          <script
            async
            defer
            data-domain="leopard.dev"
            src="https://plausible.io/js/plausible.js"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
