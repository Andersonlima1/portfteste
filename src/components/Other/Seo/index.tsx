import Head from "next/head";
import { SeoInterface } from "@/interfaces/SeoInterface";

const Seo = ({ title, description }: SeoInterface) => {
    return (
        <Head>
            <meta name="author" content="Anderson Lima" />
            <meta name="keywords" content="Javascript" />
            <link rel="fluid-icon" href="/favicon.webp" title="Anderson Lima" />
            <link rel="icon" type="svg+xml" href="/favicon.webp" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>{title === "Homepage" ? "Anderson Lima • Portfólio" : `${title} • Anderson Lima • Portfólio`}</title>
            <link rel="shortcut icon" href="/favicon.webp" type="x-icon" />
            <link rel="icon" href="/favicon.webp" sizes="32x32" />
            <link rel="icon" href="/favicon.webp" sizes="48x48" />
            <link rel="icon" href="/favicon.webp" sizes="96x96" />
            <link rel="icon" href="/favicon.webp" sizes="144x144" />
            <meta name="description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:site_name" content="Anderson Lima" />
            <meta property="og:type" content="website" key="ogtype" />
            <meta property="og:url" content="https://vagnermengali.com/" />
            <meta property="og:image:alt" content={description} />
            <meta property="og:image" content="/portfolio-blue.webp" />
            <meta name="twitter:title" content="Anderson Lima" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image" content="/portfolio-blue.webp" />
            <meta name="twitter:description" content={description} />
            <meta property="al:ios:app_name" content="Anderson Lima" />
            <meta property="al:android:app_name" content="Anderson Lima" />
            <meta property="al:android:url" content="https://vagnermengali.com/" />
        
            <meta name="theme-color" content="#7A90FF" />
            <meta name="msapplication-TileColor" content="#7A90FF" />
            <meta name="msapplication-navbutton-color" content="#7A90FF" />
            <meta name="apple-mobile-web-app-status-bar-style" content="#7A90FF" />
            <link rel="manifest" href={"/manifest.webmanifest"} />
            <meta name="robots" content="index,follow" />
            <meta name="googlebot" content="index, follow" />
        </Head>
    );
};

export default Seo;
