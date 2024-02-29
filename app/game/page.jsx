import Link from "next/link";
import React from "react";

function page() {
  return (
    <div>
      <h2 className="bg-red-700">Game Over</h2>
      <div>
        <Link href="/">Back To Game</Link>
      </div>
    </div>
  );
}

export default page;
