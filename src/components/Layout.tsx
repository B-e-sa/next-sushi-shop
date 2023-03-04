import Footer from "./Footer"
import Header from "./Header"

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Header />
            <main style={{ width: '100vw', height: '100%'}}>{children}</main>
            <Footer />
        </>
    )
}

export default Layout