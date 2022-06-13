import Link from "next/link";
import React from "react";

export default function ButtonLink({ text, path }) {
  return (
    <button className="bg-littleDarkPink shadow-lg hover:bg-white border border-primaryPink rounded-full px-6 py-2 text-white hover:text-primaryPink text-2xl">
      <Link href={path}>
        <a>{text}</a>
      </Link>
    </button>
  );
}
