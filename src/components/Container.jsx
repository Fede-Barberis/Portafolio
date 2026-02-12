const Container = ({children}) => {
    return (
        <div className="flex flex-col max-w-4xl min-h-screen mx-auto px-4 sm:px-6 lg:px-8 w-full">
            {children}
        </div>
    )
}

export default Container
