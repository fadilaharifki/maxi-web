"use client";

import { menus } from "@/contants/navigation";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function BottomNavigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t flex justify-around py-3 z-[100]">
      {menus.map(({ name, slug, icon: Icon, label }) => (
        <a
          key={name}
          href={slug}
          className="flex flex-col items-center text-gray-500"
        >
          <Icon
            className={cn(
              "h-6 w-6",
              pathname === slug ? "text-primary-blue" : "text-gray-400"
            )}
          />
          <span
            className={cn(
              "text-xs",
              pathname === slug ? "text-primary-blue" : "text-gray-400"
            )}
          >
            {label ?? name}
          </span>
        </a>
      ))}
    </nav>
  );
}
