import React from 'react'
import styled from 'styled-components';
import BannerImg from '../../image/banner.png'


const BannerImage = styled.img`
    width: 100%;
`;

export const Banner = () => {
    return (
        <BannerImage src={ BannerImg } alt="banner"/>
    )
}