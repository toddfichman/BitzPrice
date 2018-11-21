import Head from 'next/head';
import Navbar from './Navbar';


const Layout = (props) => (
    <div>
        <Head>
            <title>BitzPrice</title>
            <link rel="stylesheet"
            href="https://bootswatch.com/4/solar/bootstrap.min.css"/>
        </Head>
        <Navbar />

        <div className="container">
            {props.children} {/* whatever page were on (Home, About, ect) will be output there */}
        </div>
    </div>
);


export default Layout;