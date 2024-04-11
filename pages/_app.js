import Head from 'next/head';
import '../styles/globals.scss';

function Application({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title key="title">Feytouched Tech</title>
                <meta
                    key="description"
                    name="description"
                    content="A recognized leader in Frontend Software Engineering; delivering websites with expertise in the React ecosystem, Typescript, NextJS, AWS, and more."
                />
                <meta
                    key="keywords"
                    name="keywords"
                    // eslint-disable-next-line max-len
                    content="HTML, CSS, JavaScript, Frontend Developer, Senior Developer, Software Engineering, React, NextJS, Senior Software Engineer, Portfolio Website, Examples of Portfolio Websites, How to make a portfolio website, Software Developer for Hire, Frontend Developer for Hire"
                />
                <meta name="author" content="Alexander Mains" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default Application;
