import Navigator from "../Navigator";

interface LayoutProps{
    children:JSX.Element
}

const Layout:React.FC<LayoutProps>=(props)=>{

    const {
        children
    } = props

    return(
        <div className="layout">
            <Navigator/>
            {children}
        </div>
    )
}


export default Layout;