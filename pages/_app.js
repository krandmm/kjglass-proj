import React, { useEffect } from 'react';
import { Provider } from 'mobx-react';
import Head from 'next/head';
import PropTypes from 'prop-types';

import BascketStore from '../stores/bascket';
import ItemsStore from '../stores/items';

import AppLayout from '../components/AppLayout';

import getData from '../containers/Data';

const bascketStore = new BascketStore();
const itemsStore = new ItemsStore();

const App = ({ Component, pageProps }) => {
    const getDatas = async () => {
        try {
            const { glasses, expendables } = getData();
            itemsStore.setItems(glasses, expendables);
        } catch (error) {
            console.log('Get data error', error);
        }
    };

    useEffect(() => {
        bascketStore.initBasket();
        getDatas();
    }, []);

    return (
        <>
            <Provider bascketStore={bascketStore} itemsStore={itemsStore}>
                <Head>
                    <title>광진이화학 KJGLASS</title>
                </Head>
                <AppLayout>
                    <Component {...pageProps} />
                </AppLayout>
            </Provider>
        </>
    );
};

App.getInitialProps = async (context) => {
    const { ctx, Component } = context;
    let pageProps = {};
    if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
};

App.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.object.isRequired,
};

export default App;
