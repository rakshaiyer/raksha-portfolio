"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ArrowLeft,
  Menu,
  X,
} from "lucide-react";

import styles from "./dashboard.module.scss";
import content from "@/data/content.json";

import About from "./about";
import Resume from "./resume";
import Projects from "./projects";
import Contact from "./contact";

export default function DashboardLayout() {
  const [activeTab, setActiveTab] = useState("about");
  const [isMobile, setIsMobile] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const { profile, navigation } = content;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);

    if (isMobile) {
      setMenuOpen(false);
      setShowSidebar(false);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return <About />;
      case "resume":
        return <Resume />;
      case "projects":
        return <Projects />;
      case "contact":
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <>
      <div className={styles.wrapper}>
        {/* SIDEBAR */}
        {(!isMobile || showSidebar) && (
          <aside className={styles.sidebar}>
            {/* Mobile Top Bar */}
            {isMobile && (
              <div className={styles.mobileHeader}>
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className={styles.hamburger}
                >
                  {menuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
              </div>
            )}

            <div className={styles.profile}>
              <img
                src="/avatar-darktheme.png"
                alt="Profile Avatar"
                className={styles.avatar}
              />
              <div className={styles.profileText}>
                <h2 className={styles.name}>{profile.name}</h2>
                <p className={styles.role}>{profile.role}</p>
              </div>
            </div>

            {/* NAV (Desktop always visible, Mobile only if open) */}
            {(!isMobile || menuOpen) && (
              <div className={styles.nav}>
                {navigation.map((item) => (
                  <button
                    key={item.key}
                    onClick={() => handleTabClick(item.key)}
                    className={`${styles.tab} ${
                      activeTab === item.key ? styles.activeTab : ""
                    }`}
                  >
                    {item.label.toUpperCase()}
                  </button>
                ))}
              </div>
            )}

            <div className={styles.infoBlock}>
              <div className={styles.infoItem}>
                <Mail size={16} />
                <span>{profile.email}</span>
              </div>

              <div className={styles.infoItem}>
                <Phone size={16} />
                <span>{profile.phone}</span>
              </div>

              <div className={styles.infoItem}>
                <MapPin size={16} />
                <span>{profile.location}</span>
              </div>
            </div>

            <div className={styles.social}>
              {profile.social?.map((item, i) => (
                <a
                  key={i}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.platform === "github" && <Github size={18} />}
                  {item.platform === "linkedin" && <Linkedin size={18} />}
                </a>
              ))}
            </div>

            {/* Resume Modal Trigger */}
            <a
              href="/shreeRakshaResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.download}
            >
              Preview Resume
            </a>
          </aside>
        )}

        {/* MAIN */}
        {(!isMobile || !showSidebar || activeTab === "about") && (
          <main className={styles.main}>
            {isMobile && !showSidebar && (
              <button
                className={styles.mobileBack}
                onClick={() => setShowSidebar(true)}
              >
                <ArrowLeft size={18} /> Back
              </button>
            )}

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {renderContent()}
              </motion.div>
            </AnimatePresence>
          </main>
        )}
      </div>
    </>
  );
}
