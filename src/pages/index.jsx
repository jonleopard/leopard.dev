import PlausibleProvider from 'next-plausible'
import Head from "next/head";

export default function Index() {
  return (
    <PlausibleProvider domain="leopard.dev">
    <div className="min-h-screen bg-gray-800">
      <Head>
        <title>leopard.dev - coming soon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container font-mono pt-8">
        <div className="flex flex-col items-center content-center">
          <div className="text-xl text-gray-400">
            <a href="https://leopard.dev">leopard.dev</a>
          </div>
          <p className="text-xs text-gray-400">• site under construction •</p>
          <div className="text-xs text-gray-400">
            <p className="block inline">
              Built by <a href="https://twitter.com/jonlprd">@jonlprd | </a>
            </p>
            <span>
              <a href="https://jonleopard.com">jonleopard.com</a>
            </span>
          </div>
        </div>
      </div>
    </div>
    </PlausibleProvider>
  );
}
