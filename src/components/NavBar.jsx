
export default function NavBar() {
    return (
        <header className="w-full pt-16">
            <nav className="max-w-4xl mx-auto py-4 flex justify-between items-center">
                <ul className="flex gap-6">
                    <li><a href="#home" className="hover:text-blue-500">Home</a></li>
                    <li><a href="#about" className="hover:text-blue-500">About</a></li>
                    <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
                    <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}
