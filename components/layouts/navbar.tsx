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
} from "@/components/ui/resizable-navbar";
import { AspectRatio } from "../ui/aspect-ratio";
import Image from "next/image";

interface NavItem {
    name: string;
    link: string;
}

const navItems: NavItem[] = [
    { name: "Trang chủ", link: "#hero-section" },
    { name: "Mục tiêu", link: "#target-section" },
    { name: "Lộ trình", link: "#program-timeline-section" },
    { name: "Khóa học", link: "#featured-courses-section" },
    { name: "Sự nghiệp", link: "#career-timeline-section" },
    { name: "Giảng viên", link: "#featured-faculty-section" },
    { name: "Thực tập", link: "#internship-section" },
    { name: "Cơ hội", link: "#career-opportunities-section" },
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
        <ResizableNavbar className="fixed top-0 left-0 right-0 z-50 h-[60px]">
            {/* Desktop Navbar */}
            <NavBody>
                <NavItems items={navItems} />
            </NavBody>

            {/* Mobile Navbar */}
            <MobileNav>
                <MobileNavHeader>
                    <div className="w-[60px] h-[60px]">
                    <AspectRatio ratio={1}>
                        <Image
                            src="/logo truong/HUB logo-08.png"
                            alt="HUB Logo"
                            width={100}
                            height={100}
                            className="object-contain w-full h-full"
                            priority
                        />
                    </AspectRatio>
                    </div>
                    <MobileNavToggle
                        isOpen={isMobileMenuOpen}
                        onClick={toggleMobileMenu}
                    />
                </MobileNavHeader>
                <MobileNavMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} className="bg-white dark:bg-neutral-950">
                    <NavItems items={navItems} onItemClick={closeMobileMenu} className="flex flex-col items-start justify-start gap-4" />
                </MobileNavMenu>
            </MobileNav>
        </ResizableNavbar>
    );
}