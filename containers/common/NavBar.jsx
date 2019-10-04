import React, { useCallback } from 'react';
import Router from 'next/router';

import NavBarComponent from '../../components/common/NavBar';

const NavBar = () => {
    const moveMainPage = useCallback(() => {
        Router.push({
            pathname: '/',
        });
    }, []);

    const openInfo = useCallback(() => {
        Router.push({
            pathname: '/info',
        });
    }, []);

    const openProduct = useCallback(() => {
        Router.push({
            pathname: '/products',
        });
    }, []);

    const openProductSearch = useCallback(() => {
        Router.push({
            pathname: '/shop',
        });
    }, []);

    const openProductInfo = useCallback(() => {

    }, []);

    const openCustomerCenter = useCallback(() => {

    }, []);


    return (
        <NavBarComponent
            moveMainPage={moveMainPage}
            openInfo={openInfo}
            openProduct={openProduct}
            openProductSearch={openProductSearch}
            openProductInfo={openProductInfo}
            openCustomerCenter={openCustomerCenter}
        />
    );
};

export default NavBar;
