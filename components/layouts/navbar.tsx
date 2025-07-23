"use client";

import React, { useState } from "react";
import {
    Navbar as ResizableNavbar,
    NavBody,
    NavItems,
    MobileNav,
    MobileNavHeader,
    MobileNavMenu,
    MobileNavToggle,
    NavbarLogo,
    NavbarButton,
} from "@/components/ui/resizable-navbar";

interface NavItem {
    name: string;
    link: string;
}

const navItems: NavItem[] = [
    { name: "Home", link: "#" },
    { name: "Mục tiêu", link: "#target-section" },
    { name: "Services", link: "#services" },
    { name: "Contact", link: "#contact" },
];

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <ResizableNavbar className="fixed top-0 left-0 right-0 z-50">
            {/* Desktop Navbar */}
            <NavBody>
                <NavbarLogo href="#" src="/logo truong/HUB logo-08.png"
                    width={70}
                    height={70}
                    children={<div className="flex flex-col"><span className="text-xl font-bold">Trường đại học Ngân hàng</span>
                    <span className="text-md font-bold">Thành Phố Hồ Chí Minh</span></div>} />
                <NavItems items={navItems} />
            </NavBody>

            {/* Mobile Navbar */}
            <MobileNav>
                <MobileNavHeader>
                    <NavbarLogo href="#" src="/logo truong/HUB logo-08.png" />
                    <MobileNavToggle
                        isOpen={isMobileMenuOpen}
                        onClick={toggleMobileMenu}
                    />
                </MobileNavHeader>
                <MobileNavMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu}>
                    <NavItems items={navItems} onItemClick={closeMobileMenu} className="flex flex-col items-start justify-start gap-4" />
                </MobileNavMenu>
            </MobileNav>
        </ResizableNavbar>
    );
}