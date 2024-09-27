import Landing from "@/src/components/Modules/Home/Landing";
import RecentPost from "@/src/components/Modules/Home/RecentPost";
import { Suspense } from "react";
import Loading from "./loading";

export default function Home() {
  return (
    <div >
      <Landing />
      <Suspense fallback={<Loading/>}>
      
      <RecentPost />
      </Suspense>
    </div>
  );
}
