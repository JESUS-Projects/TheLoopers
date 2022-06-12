import Link from "next/link";
import React from "react";

export default function ButtonLink({ text, path }) {
  return (
    <button className="bg-littleDarkPink hover:bg-white border border-primaryPink rounded-full px-6 py-2 shadow-lg text-white hover:text-primaryPink">
      <Link href={path}>
        <a>{text}</a>
      </Link>
    </button>
  );
}
