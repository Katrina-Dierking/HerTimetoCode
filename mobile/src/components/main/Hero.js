import React from 'react'
import dots from '../../images/dots.png'
import cursive1 from '../../images/cursive1.png'
import mobileHTTC from '../../images/mobileHTTC.png'
import styled from 'styled-components'
import {useMediaQuery} from 'react-responsive'

export default function Hero () {

    // const isPhone = useMediaQuery({query: '(max-width: 500px)'})
    // const isTablet = useMediaQuery({query:'(min-width: 501px)'})
    // const isDesktop = useMediaQuery({query: '(min-width:801px)' && '(max-width: 1200px)'})
    // const {isWide} = useMediaQuery({query:'(min-width: 1201px)' && '(max-width: 2400px)'})


    return (
        <>
        <HeroWrapper>
            <img src = {dots} className = "hero" alt = "hero section with call to action" />
            <img src = {mobileHTTC} className = "top" alt = "HTTC logo in cursive" />
        </HeroWrapper>
        

        {/* {isWide &&
        <HeroWrapper2>
            <img src = {cursive1} className = "top2" alt = "Her Time to Code Title and Subtitle" />
        </HeroWrapper2>
        } */}

    
        </>
    )
}

const HeroWrapper = styled.div`
    display:flex; 
    flex-direction: column;
    margin-top:2%;
    min-width:100%;

    .hero {
        max-width: 100%;
        opacity: 0.25;
        z-index:0;
    }

    .top {
        max-width:100vw;
        position:absolute;
        padding: 0 2% 0 2%;
    }
`
const HeroWrapper2 = styled.div`
display:flex; 
flex-direction: column;
`

