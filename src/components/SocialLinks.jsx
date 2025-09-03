import { IconMailForward, IconBrandLinkedin, IconBrandGithub } from "@tabler/icons-react";

const links = [
    {
        href: "mailto:fedeandresbarberis@gmail.com",
        icon: IconMailForward,
        hoverColor: "hover:text-red-500",
    },
    {
        href: "https://www.linkedin.com/in/fede-barberis-49ba1a30a/",
        icon: IconBrandLinkedin,
        hoverColor: "hover:text-blue-600",
    },
    {
        href: "https://github.com/Fede-Barberis",
        icon: IconBrandGithub,
        hoverColor: "hover:text-black",
    },
];

export default function SocialLinks() {
    return (
        <div className="flex gap-4">
        {links.map(({ href, icon: Icon, hoverColor }, i) => (
            <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-600 transition-all duration-300 cursor-pointer hover:scale-110 ${hoverColor}`}
            >
            <Icon size={24} stroke={2} />
            </a>
        ))}
        </div>
    );
}