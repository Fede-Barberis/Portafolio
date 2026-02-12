import { IconBrandGithub,  IconLink } from "@tabler/icons-react";

export const ProjectCardVertical = ({ title, description, image, link, repo, lenguaje }) => {
    return (
        <div className="flex flex-col w-full h-full space-y-6">
            <div className="aspect-video w-full overflow-hidden rounded-xl shadow">
                <img 
                    src={image} 
                    alt={title} 
                    className="w-full h-full object-cover object-left scale-105 hover:scale-100 duration-700 transition-transform" 
                />
            </div>
            <div className="flex flex-col gap-2 flex-1 mt-3">
                <h3 className="text-xl text-black/80 font-bold">{title}</h3>

                {/* Lenguajes */}
                <div className="flex flex-wrap gap-2 mt-1">
                {lenguaje.map((lang, idx) => (
                    <span
                        key={idx}
                        className="px-3 py-1 rounded-full bg-gray-200 text-gray-600 text-xs font-medium"
                    >
                    {lang}
                    </span>
                ))}
                </div>

                <p className="text-sm text-black/60 my-2">{description}</p>
                <div className="flex gap-3 mt-auto">
                    {link && <a href={link} className="flex flex-row justify-center items-center gap-2 flex-1 border rounded-lg px-3 py-2.5 text-sm text-white text-center font-semibold bg-blue-900 hover:bg-blue-950 transition-all duration-200" target="_blank"><IconLink />Preview</a>}
                    {repo && <a href={repo} className="flex fle-row justify-center items-center gap-2 border border-black/10 rounded-lg px-3 py-2.5 text-sm text-black/70 hover:text-purple-700 transition-all duration-200" target="_blank"><IconBrandGithub />Code</a>}
                </div>
            </div>
        </div>
    );
};


export const ProjectCardHorizontal = ({ title, description, image, link, repo, lenguaje }) => {
    return (
        <div className="flex flex-col sm:flex-row gap-6 h-full py-1">
            <div className="w-full sm:w-1/2 h-56 overflow-hidden rounded-xl shadow">
                <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover rounded-xl scale-105 hover:scale-100 duration-700 transition-transform" />
            </div>
            <div className="flex flex-col flex-1 gap-2">
                <h3 className="text-xl font-bold">{title}</h3>

                {/* Lenguajes */}
                <div className="flex flex-wrap gap-2">
                {lenguaje.map((lang, idx) => (
                    <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-gray-200 text-gray-800 text-xs font-medium"
                    >
                    {lang}
                    </span>
                ))}
                </div>

                <p className="text-sm text-gray-600 pt-2">{description}</p>
                <div className="flex gap-3 mt-auto">
                    {link && <a href={link} className="flex flex-row justify-center items-center gap-2 border rounded-lg px-3.5 py-2 text-sm text-white text-center font-semibold bg-black hover:bg-black/80 transition-all duration-200" target="_blank"><IconLink />Preview</a>}
                    {repo && <a href={repo} className="flex fle-row justify-center items-center gap-2 rounded-lg px-3.5 py-2 text-sm text-black/70 hover:text-white hover:bg-purple-700 transition-all duration-200" target="_blank"><IconBrandGithub />Code</a>}
                </div>
            </div>
        </div>
    );
};

