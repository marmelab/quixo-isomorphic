import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }
    render() {
        return (
            <html style={{ height: '100%' }}>
                <Head>
                    <style>
                        {`
            #__next { height: 100% }
          `}
                    </style>
                    {this.props.styleTags}
                </Head>
                <body style={{ height: '100%', margin: 0 }}>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
