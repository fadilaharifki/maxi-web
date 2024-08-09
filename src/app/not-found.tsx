"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push("/");
    }, 1000);

    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <div className="flex justify-center items-center w-screen h-screen ">
      <Image
        src="/assets/image/page-not-found.jpg"
        width={1000}
        height={1000}
        alt="Logo"
        className="w-screen "
      />
    </div>
  );
}
