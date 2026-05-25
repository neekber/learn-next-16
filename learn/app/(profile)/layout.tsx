import { ReactNode } from "react";
import ProfileNavbar from "../../components/profile/ProfileNavbar";

const ProfileLayout = ({children}: {children: Readonly<ReactNode>}) => {

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <ProfileNavbar />
            {children}
        </div>  
    )

}

export default ProfileLayout;