import Document, { Head, Main, NextScript } from 'next/document';
import PropTypes from 'prop-types';
import { ServerStyleSheet } from 'styled-components';

import APP_KEY from '../kakao.appkey';

// The document (which is SSR-only) needs to be customized to expose the locale
// data for the user's locale for React Intl to work in the browser.
class MyDocument extends Document {
    static getInitialProps(context) {
        const sheet = new ServerStyleSheet();
        const page = context.renderPage((App) => (props) => sheet.collectStyles(<App {...props} />));
        const styleTags = sheet.getStyleElement();
        return { ...page, styleTags };
    }

    render() {
        const kakaoUrl = `http://dapi.kakao.com/v2/maps/sdk.js?appkey=${APP_KEY}`;

        return (
            <html>
                <Head>
                    {this.props.styleTags}
                    <script type="text/javascript" src={kakaoUrl}></script>
                </Head>
                <body style={{ margin: 0 }}>
                    <Main />
                    <NextScript />
                </body>
                {/* <!-- The core Firebase JS SDK is always required and must be listed first --> */}
                <script src="/__/firebase/7.3.0/firebase-app.js"></script>

                {/* <!-- TODO: Add SDKs for Firebase products that you want to use */}
                {/* https://firebase.google.com/docs/web/setup#available-libraries --> */}
                <script src="/__/firebase/7.3.0/firebase-analytics.js"></script>

                {/* <!-- Initialize Firebase --> */}
                <script src="/__/firebase/init.js"></script>
            </html>
        );
    }
}

MyDocument.propTypes = {
    styleTags: PropTypes.array.isRequired,
};

export default MyDocument;

/*
기본 _document.js 모습일 것 같다
            <html>
                <Head />>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
 */
