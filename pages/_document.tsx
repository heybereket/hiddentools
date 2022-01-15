import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta
            name="og:title"
            content="Hidden Tools - Discover a wide collection of unique tools"
          />
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="description"
            content="Explore a collection of tools to use for your next project. Submit, search, filter, and find tools from a ton different categories."
          />
          <meta
            name="keywords"
            content="hidden tools, tools, discover tools, find tools, design tools, notion, vscode, discovery, unique tools, open source tool, developer tools, products, directory"
          />
          <meta
            name="twitter:description"
            content="Explore a collection of tools to use for your next project. Submit, search, filter, and find tools from a ton different categories."
          />
          <meta
            name="twitter:title"
            content="Hidden Tools - Discover a wide collection of unique tools"
          />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
