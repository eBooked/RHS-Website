export interface NavItem {
    label: string;
    href: string;
}

export interface NavDropdown {
    label: string;
    children: NavItem[];
}
export const mobileCTA: NavItem[] = [
    {
        label: "Donate",
        href: "/donate"
    },
    {
        label: "Join",
        href: "/join"
    },
    {
        label: "Contact",
        href: "/contact"
    }
]
export const navigationData: (NavItem | NavDropdown)[] = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "About us",
        children: [
            {
                label: "Our Team",
                href: "/team"
            },
            {
                label: "Gallery",
                href: "/gallery"
            },
            {
                label: "Mentors",
                href: "/mentors"
            }
        ]

    },
    {
        label: "Resources",
        children: [
            {
                label: "Discord",
                href: "/chat"
            },
            {
                label: "Calendar",
                href: "/calendar"
            },
            {
                label: "GitHub",
                href: "/github"
            }
        ]
    },
    {
        label: "Community",
        children: [
            {
                label: "Join",
                href: "/join"
            },
            {
                label: "Mentorship",
                href: "/join-mentor"
            },
            {
                label: "Outreach",
                href: "/outreach"
            },
        ]
    }
];