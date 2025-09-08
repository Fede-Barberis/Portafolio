import { IconMailForward, IconBrandLinkedin, IconBrandGithub, IconArrowUpRight } from "@tabler/icons-react";

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

const contacts = [
    { title: "Linkedin", href: "https://www.linkedin.com/in/fede-barberis-49ba1a30a/", icon: IconArrowUpRight},
    { title: "GitHub", href: "https://github.com/Fede-Barberis", icon: IconArrowUpRight},
];

export const SocialLinks = () => {
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


export const SocialContacts = () => {
    return (
        <div className="flex gap-4">
        {contacts.map(({  href, title:title, icon:Icon }, i) => (
            <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex justify-between items-center rounded-2xl border px-2 py-0.5 bg-gray-200 text-gray-600 hover:bg-gray-300 transition-all duration-300 cursor-pointer hover:-translate-y-0.5 hover:text-black`}
            >
                <span className="text-sm text-black/50">{title}</span>
                <Icon size={24} stroke={1} className="ml-3" />
            </a>
        ))}
        </div>
    );
}