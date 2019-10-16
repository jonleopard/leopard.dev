import Link from "next/link";
import "../styles/index.css";

export default function Index() {
  return (
    <div className="flex-col container mx-auto font-mono min-h-0">
        <div className="text-sm text-gray-700">
          <a href="https://leopard.dev">leopard.dev</a>
        </div>
        <div className="items-end">
          <p className="text-gray-600 text-sm">
            currently developing great products for @creationshop
          </p>
          <p className="text-gray-500 text-sm">thanks for stopping by!</p>
        <div className="text-gray-400 text-xs">
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
