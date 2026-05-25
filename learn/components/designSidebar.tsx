import Link from "next/link";


const DesignSideBar = ()=>{

    return(
        <div style={{ width: "200px", height: "100%", backgroundColor: "black", border: "1px solid white", textAlign: "center", padding: "20px" }}>
            <h1 style={{fontSize: "1.5rem"}}>Design Sidebar</h1>

            <div className="w-full py-5 flex items-center justify-between flex-col gap-4">
                <Link href="/design/colors" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
                    Colors
                </Link>
                <Link href="/design/typography" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300">
                    Typography
                </Link> 
            </div>
        </div>
    )


}

export default DesignSideBar;