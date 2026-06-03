import Link from "next/link";
import React, { ReactNode } from "react";

export default function DashBoardLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <nav>
        <ul className="flex justify-center gap-10 bg-amber-500">
          <li>
            <Link href={"/next-level"}>Next Level</Link>
          </li>
          <li>
            <Link href={"/phero"}>P Hero</Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
}
