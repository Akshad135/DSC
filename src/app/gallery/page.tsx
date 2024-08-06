import Footer from "@/components/body/footer";
import ComingSoon from "@/components/body/ComingSoon";
import Header from "@/components/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coming Soon | Vit Bhopal",
  description: "Automate Your Work With Muse",
};

export default function ComingSoonPage() {
  return (
    <main className="max-xs:overflow-x-hidden max-w-screen-xl mx-auto min-h-screen snap-y snap-mandatory md:h-screen scroll-smooth overflow-y-scroll">
      <Header />
      <ComingSoon />
      <Footer />
    </main>
  );
}
