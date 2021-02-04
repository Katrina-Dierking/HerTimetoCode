import React from 'react'
import hi1 from '../../images/hi1.png'
import me from '../../images/me.png'

import styled from 'styled-components'

export default function IntroDesk () {

    return (
        <>

                <section>
                        <DeskWrapper>
                            <div className = "phoneTopPic">
                                <img src = {me} className = "me2" alt = "Katrina Dierking | Founder of Her Time to Code"/>
                            </div>

                            <IntroText2>
                                <img src = {hi1} className = "name2" alt = "introduction from Katrina Dierking | Founder of Her Time to Code" />
                                <p className = "introP">I give women the tools they need today to 
                                become skilled web developers of tomorrow. </p>
                            
                            </IntroText2>
                        </DeskWrapper>
                        <hr></hr>

                            <CTAWrap>
                                <p className = "CtaP"> FREE Web Developer Course Blueprint {`>>`}</p>
                                <button className = "CtaButton">Get it now!</button>
                            </CTAWrap>
                        </section>

                        </>
    );
}
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const DeskWrapper = styled.div `
    max-width: 100vw;
    display:flex;
    position:relative;
    flex-direction:row;
    margin-top: -30%;
    margin-left: 2%;
    z-index: 99999;


    .me2 {
        max-width: 20vw;
        padding-top:1%;
        margin-top:-15vw;
    }
`

const IntroText2 = styled.div`
    max-width: 40vw;
    margin-left: -7%;
    margin-top: -10vh;
    padding: 2%;

    .name2 {
        max-width: 20vw;
        padding-bottom: .5%;
        margin-left: 10%;
        z-index: 99999;
    }

    .introP {
        font-size: 1.2rem;
        margin-left: 15%;
    }
`

const CTAWrap = styled.div`
    margin-top: -2.1%;
    background-color: #EFE1CD;
    max-width: 100%;
    display:flex;
    flex-direction:row;
    background-image: linear-gradient(to right, rgb(251,240,208), rgb(237,208,171));
    box-shadow: 1px .5px 5px 1px black;
    border: 2px solid black;

    .CtaP{
        min-width: 65vw;
        font-size: 1rem;
        text-align:center;
        // padding: 1% 1%;
        margin-top: 1%;

    }

    .CtaButton {
        font-size: 1rem;
        background-color: #17c436;
        margin: 1%;
        min-width: 20vw;
        z-index: 99999;
    }
`
