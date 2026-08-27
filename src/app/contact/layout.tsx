import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Mazin Solution",
  description: "Get in touch with Mazin Solution. We are ready to assist you with your next major industrial supply or engineering project.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
