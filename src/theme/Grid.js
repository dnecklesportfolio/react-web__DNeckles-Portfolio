import styled from 'styled-components';
import media from './media';

export const Container = styled.div`
    position: relative;
    margin-left: auto;
    margin-right: auto;
    padding-right: 30px;
    padding-left: 30px;

    ${media.phone`
     padding-right: 15px;
    padding-left: 15px;
    width: 540px;
    max-width: 100%;
    `}

    ${media.tablet`
     padding-right: 15px;
    padding-left: 15px;
     width: 720px;
    max-width: 100%;
    `}

    ${media.desktop`
    padding-right: 15px;
    padding-left: 15px;
        width: 960px;
    max-width: 100%;
    `}
    
    ${media.widescreen`
        padding-right: 15px;
    padding-left: 15px;
    max-width: 100%;
    `}
`;

export const FullBleedDiv = styled.div`
     width: 100%;
     height: 100vh;
     background-size: cover;
     background-repeat: no-repeat;
     margin: 0;
     padding: 0;
`;
