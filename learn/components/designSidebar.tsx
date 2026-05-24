import Link from "next/link";


const DesignSideBar = ()=>{

    return(
        <div style={{ width: "200px", height: "100%", backgroundColor: "black", border: "1px solid white", textAlign: "center", padding: "20px" }}>
            <h1 style={{fontSize: "1.5rem"}}>Design Sidebar</h1>
            <ul style={{ listStyleType: "none", padding: 0 }}>
                <li><Link style={{textDecoration: "underline", color: "red"}} href="/design/colors">Colors </Link></li>
                <li><Link style={{textDecoration: "underline", color: "red"}} href="/design/typography">Typography</Link></li>
            </ul> 
        </div>
    )


}

export default DesignSideBar;