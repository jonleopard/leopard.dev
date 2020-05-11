import Link from "next/link";
import "../styles/index.css";

export default function Index() {
  return (
    <div className="container font-mono">
      <div className="flex flex-col items-center content-center">
        <div className="text-xl text-gray-400">
          <a href="https://leopard.dev">leopard.dev</a>
        </div>
          <p className="text-xs text-gray-400">
             • site under construction •
          </p>
        <div className="text-xs text-gray-400">
          <p className="inline block">
            Built by <a href="https://twitter.com/jonlprd">@jonlprd | </a>
          </p>
          <span>
            <a href="https://jonleopard.com">jonleopard.com</a>
          </span>
        </div>
      </div>
    </div>
  );
}
