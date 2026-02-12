import { IconMailForward, IconBrandLinkedin, IconBrandGithub, IconArrowUpRight } from "@tabler/icons-react";

const links = [
    {
        href: "mailto:fedeandresbarberis@gmail.com",
        icon: IconMailForward,
        hoverColor: "hover:text-red-500",
        borderColor: "hover:border-red-500"
    },
    {
        href: "https://www.linkedin.com/in/fede-barberis-49ba1a30a/",
        icon: IconBrandLinkedin,
        hoverColor: "hover:text-blue-600",
        borderColor: "hover:border-blue-500"
    },
    {
        href: "https://github.com/Fede-Barberis",
        icon: IconBrandGithub,
        hoverColor: "hover:text-black",
        borderColor: "hover:border-gray-500"
    },
];

const contacts = [
    { title: "Linkedin", href: "https://www.linkedin.com/in/fede-barberis-49ba1a30a/", icon: IconArrowUpRight},
    { title: "GitHub", href: "https://github.com/Fede-Barberis", icon: IconArrowUpRight},
];

export const SocialLinks = () => {
    return (
        <div className="flex gap-3">
        {links.map(({ href, icon: Icon, hoverColor, borderColor }, i) => (
            <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2.5 rounded-xl bg-white border-2 border-gray-200 text-gray-600 transition-all duration-300 cursor-pointer hover:scale-110 hover:shadow-lg ${borderColor} ${hoverColor}`}
            >
            <Icon size={22} stroke={2} />
            </a>
        ))}
        </div>
    );
}


export const SocialContacts = () => {
    return (
        <div className="flex gap-4 flex-wrap">
        {contacts.map(({  href, title:title, icon:Icon }, i) => (
            <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex justify-between items-center rounded-xl border-2 border-indigo-200 px-5 py-2.5 bg-white hover:bg-indigo-600 transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-lg"
            >
                <span className="text-sm font-semibold text-gray-700 group-hover:text-white transition-colors duration-300">{title}</span>
                <Icon size={20} stroke={2} className="ml-3 text-indigo-600 group-hover:text-white group-hover:rotate-45 transition-all duration-300" />
            </a>
        ))}
        </div>
    );
}
