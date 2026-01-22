import Navbar from './Navbar';
import Footer from './Footer';
import Head from 'next/head';

const Layout = ({ children, title = "Portfolio" }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Professional Web Developer Portfolio" />
            </Head>
            <Navbar />
            <main style={{ minHeight: '100vh', paddingTop: '80px' }}>
                {children}
            </main>
            <Footer />
        </>
    );
};

export default Layout;
