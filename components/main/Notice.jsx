import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

const Title = styled.div`

`;

const Content = styled.div`

`;

const Notice = () => {
    return (
        <div>
            <Title>
                {'공지 사항'}
            </Title>
            <Content>
                {'공지 사항 들'}
            </Content>
        </div>
    );
};

Notice.propTypes = {

};

export default Notice;
