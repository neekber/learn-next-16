import Link from "next/link";
import React from "react";

const ProfileNavbar = () => {
  return (
    <>
      <style>
        {`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.profile-navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 40px;
  background: #ffffff;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.08);
  position: sticky;
  top: 0;
  z-index: 100;
}

.logo h2 {
  color: #2563eb;
  font-size: 1.5rem;
  font-weight: 700;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 30px;
  margin-left: 1rem;
}

.nav-links a {
  text-decoration: none;
  color: #374151;
  font-weight: 500;
  transition: 0.3s ease;
}

.nav-links a:hover {
  color: #2563eb;
}

.profile-section {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  padding: 6px 12px;
  border-radius: 12px;
  transition: 0.3s ease;
}

.profile-section:hover {
  background: #f3f4f6;
}

.profile-image {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #2563eb;
}

.profile-info {
  display: flex;
  flex-direction: column;
}

.profile-name {
  font-size: 0.95rem;
  font-weight: 600;
  color: #111827;
}

.profile-role {
  font-size: 0.8rem;
  color: #6b7280;
}

@media (max-width: 768px) {
  .profile-navbar {
    padding: 15px 20px;
  }

  .profile-info {
    display: none;
  }
}
  `}
      </style>
      <nav className="profile-navbar">
        <div className="logo">
          <h2>MyProfile</h2>
        </div>

        <ul className="nav-links">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/projects"}>Projects</Link>
          </li>
          <li>
            <Link href={"/messages"}>Messages</Link>
          </li>
          <li>
            <Link href={"/settings"}>Settings</Link>
          </li>
        </ul>

        <div className="profile-section">
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="Profile"
            className="profile-image"
          />
          <div className="profile-info">
            <span className="profile-name">John Doe</span>
            <span className="profile-role">Frontend Developer</span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default ProfileNavbar;
