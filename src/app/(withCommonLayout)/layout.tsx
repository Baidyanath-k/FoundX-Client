import MainFooter from "@/src/components/MainFooter";
import { Navbar } from "@/src/components/navbar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main>{children}</main>
      <MainFooter />
    </div>
  );
};

export default layout;
