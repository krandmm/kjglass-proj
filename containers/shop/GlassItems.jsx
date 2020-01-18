import React from 'react';

import { toJS } from 'mobx';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
import useStore from '../../hooks/useStore';

import ShopItems from './ShopItems';

const GlassItems = ({ classifiedId, productId }) => {
    const { itemsStore } = useStore();
    const { items } = toJS(itemsStore);

    return (
        <>
            {
                items && items.glasses
                && (
                    <ShopItems
                        shopId={'1'}
                        products={items.glasses}
                        classifiedId={classifiedId}
                        productId={productId}
                    />
                )
            }
        </>
    );
};

GlassItems.propTypes = {
    classifiedId: PropTypes.string,
    productId: PropTypes.string,
};

GlassItems.defaultProps = {
    classifiedId: null,
    productId: null,
};

export default observer(GlassItems);
