"use client";

import useStoreUserEffect from "@/hooks/use-store-user-effect";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const userId = useStoreUserEffect();
  return <div>{children}</div>;
}
