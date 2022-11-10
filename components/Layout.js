import React from "react"
import Head from 'next/head'
import Header from "../components/Header";


const Layout = ({ title, description, children }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta property="og:site_name" content="portfolio" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <link rel="icon" href="/favicon.ico" />
                {/* buy me a coffee */}
                <script data-name="BMC-Widget" data-cfasync="false" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="sevdeorscelik" data-description="Support me on Buy me a coffee!" data-message="" data-color="yellow" data-position="Right" data-x_margin="18" data-y_margin="18"></script>
            </Head>
            <div className="relative z-10 px-3 overflow-hidden min-h-screen bg-primary-light antialiased font-montserrat dark:bg-gray-900 dark:text-light">
                <div className="w-full h-full" >
                    <Header />
                    {children}
                </div>

            </div>

        </>
    )
};

export default Layout;
