import Menu from "../main/Menu";

const Layout = ({
    title = 'Title',
    description = "description",
    className,
    children
                }) => (
    <div>
        <Menu/>
        <div className='jumbotron'>
            <h1>{title}</h1>
            <p className='lead'>
                {description}
            </p>
        </div>
        <div className={className}>
            {children}
        </div>
    </div>
)

export default Layout;