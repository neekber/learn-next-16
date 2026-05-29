import Pages from "@/components/rootSideBar"
import { Suspense } from "react";
import PostsPage from "@/components/posts";

export default function App(){
    return (
        <>
        
        <Pages />

          <div>
            Lorem ipsum dolor sit amet consectetur
          </div>

          <Suspense fallback={<div>Loading....</div>}>
                <PostsPage />
          </Suspense>

        </>
    )
}