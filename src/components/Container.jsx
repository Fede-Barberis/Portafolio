
const Container = ({children}) => {
    return (
        <div className="flex flex-col max-w-3xl min-h-screen mx-auto px-4">
            {children}
        </div>
    )
}

export default Container