import React from "react";
import Link from "next/link";

const ConnectWithMe = () => {
  return (
    <div className="flex flex-col justify-start items-start">
      <p className="text-lg font-medium">
        {`You can connect with me on the following platforms:`}
      </p>
      <ul className="text-md">
        {/* Github */}
        <li>
          <Link
            href="https://github.com/nvmesensor"
            className="text-green-700 underline"
          >
            GitHub
          </Link>
        </li>
        {/* LinkedIn */}
        <li>
          <Link
            href="https://linkedin.com/in/priyannxhuu"
            className="text-green-700 underline"
          >
            LinkedIn
          </Link>
        </li>
        {/* Twitter */}
        <li>
          <Link
            href="https://twitter.com/priyannxhuu"
            className="text-green-700 underline"
          >
            Twitter
          </Link>
        </li>
        {/* Peerlist */}
        <li>
          <Link
            href="https://peerlist.co/u/priyannxhuu"
            className="text-green-700 underline"
          >
            Peerlist
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ConnectWithMe;