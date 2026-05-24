import { ReactNode } from "react";
import DesignSideBar from "../../components/designSidebar";

const DesignLayout = ({children}: Readonly<{children: ReactNode}> ) => {

    return (
        <div style={{ display: "flex", height: "100vh", gap:"1rem" }}>
            <DesignSideBar />
            {children}
        </div>
    )

}

export default DesignLayout;