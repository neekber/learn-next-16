import { Metadata } from "next";

// metadata ==========
// export const metadata: Metadata = {
//   title: "Metadata Page",
// };

// dynamic metadata ==========
// export function generateMetadata(): Metadata{

//     // use the generateMetadata function to dynamically generate metadata for this page

//     return {
//         title: "Metadata Page by Generate Metadata Function",
//         description: "This page demonstrates how to define metadata for a Next.js page.",
//     }
// }



export default function MetadataPage() {


  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Metadata Example</h1>
      <p className="mb-4">This page demonstrates how to define metadata for a Next.js page.</p>
      <div className="border p-4 rounded">
        <h2 className="text-xl font-semibold mb-2">Page Metadata</h2>
        <p className="mb-2">The metadata for this page is defined in the `metadata` export at the top of this file.</p>
        <p className="mb-2">You can view the metadata in the browser's developer tools under the "Elements" tab, where you will find the title and description tags.</p>
      </div>
    </>
  )
}   