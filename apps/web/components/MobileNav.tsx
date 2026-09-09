"use client";

import Link from "next/link";
import { useState } from "react";
import { nav } from "@/content/site";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-nav"
        className="text-sm"
      >
        {open ? "Close" : "Menu"}
      </button>

      <div
        id="mobile-nav"
        hidden={!open}
        className="fixed inset-x-0 top-16 border-b border-rule bg-paper"
      >
        <ul className="px-6 py-4">
          {nav.map((item) => (
            <li key={item.href} className="border-b border-rule last:border-0">
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-4"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="border-t border-rule">
            <Link href="/care" onClick={() => setOpen(false)} className="block py-4">
              Care &amp; Warranty
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
