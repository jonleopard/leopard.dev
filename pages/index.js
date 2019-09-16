import Link from "next/link";
import "../styles/index.css";

export default function Index() {
  return (
    <>
      <div className="container mx-auto">
        <div className="text-purple-600">
          <h1>leopard.dev</h1>
          <p className="text-grey-dark">
            currently building great products @creationshop
          </p>
          <p>thanks for stopping by!</p>
        </div>
        <div className="text-green-500">
          <p className="inline block">
            Built by <a href="https://twitter.com/jonlprd">@jonlprd | </a>
          </p>
          <span>
            <a href="https://jonleopard.com">jonleopard.com</a>
          </span>
        </div>
      </div>
    </>
  );
}
