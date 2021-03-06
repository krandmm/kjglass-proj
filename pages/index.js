import React, { useCallback, useState } from 'react';
import Router from 'next/router';

import AppLayout from '../components/AppLayout';

import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

import NavBar from '../containers/common/NavBar';
import CustomerCenter from '../containers/main/CustomerCenter';
import ProductPreview from '../containers/main/ProductPreview';
import Notice from '../containers/main/Notice';
import SearchProduct from '../containers/main/SearchProduct';

import { ViewContainer } from '../styles/style';
import { MainItems, MainItem } from '../styles/main';

const Home = () => {
    const [sideBarItems] = useState([{
        text: '회사소개',
        path: '/info',
    }, {
        text: '주요제품',
        id: '/products',
    }, {
        text: '제품검색',
        id: '/shop',
    }, {
        text: '기자재정보',
        id: '/equipment',
    }, {
        text: '고객센터',
        id: '/customercenter',
    }]);

    const clickSideItem = useCallback((path) => {
        Router.push({
            pathname: path,
        });
    }, [sideBarItems]);

    return (
        <AppLayout>
            <NavBar
                sideMenuItems={sideBarItems}
                clickSideItem={clickSideItem}
            />
            <ViewContainer>
                <Header />
                <ProductPreview />
                <MainItems>
                    <MainItem>
                        <Notice />
                    </MainItem>
                    <MainItem>
                        <SearchProduct />
                    </MainItem>
                    <MainItem>
                        <CustomerCenter />
                    </MainItem>
                </MainItems>
            </ViewContainer>
            <Footer />
        </AppLayout>
    );
}

export default Home;
