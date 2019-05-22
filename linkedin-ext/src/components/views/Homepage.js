import React, { Component } from 'react';
import styled from 'styled-components';
import { TweenMax } from "gsap/TweenMax";

const PageWrapper = styled.div`
    ${'' /* border: 1px solid red; */}
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

const TopWrapper = styled.div`
    ${'' /* border: 1px solid red; */}
    height: 500px;
    background: url("https://i.imgur.com/9cMSTU1.jpg");
    background-size: cover;
    width: 100%;
    display: flex;
    justify-content: center;
`;

const ContentWrapper = styled.div`
    ${'' /* border: 1px solid red; */}
    display: flex;
    padding: 0 20px;
    height: 100%
    max-width: 1100px;
`;

const HeroText = styled.div`
    ${'' /* border: 1px solid red; */}
    width: 100%;
    padding: 0px 150px 0 0;
    color: white;
    text-shadow: 2px 4px 3px rgba(0,0,0,0.3);
    margin: auto 0;

    h1 {
        line-height: 35px;
        letter-spacing 2px;
        font-size: 40px; 
    }

    p {
        ${'' /* border: 1px solid red; */}
        line-height: 25px;
        margin-top: 30px;
        font-size: 24px;
    }
`;

const AddExtensionBtn = styled.button`
    ${'' /* border: 1px solid red; */}
    height: 50px;
    width: 300px;
    margin: 40px 0;
    border: 1px solid #0284b1;
    border-radius: 5px;
    cursor: pointer;
    background-color: #0284b1;
    color: white;
    font-size: 24px;
    font-weight: 600;
    background-image: linear-gradient(-180deg, #0387fa, #0284b1, 90%);

    &:hover {
    border: 1px solid #02659e;
    background-image: linear-gradient(-180deg, #0284b1, #02659e 90%);
    }
`;

const HeroPic = styled.div`
    ${'' /* border: 1px solid red; */}
    width: 70%;
    margin-top: 46px;

    img {
        ${'' /* border: 1px solid red; */}
        width: 100%;
    }
`;

const BottomWrapper = styled.div`

`;

const BounceArrowWrapper = styled.div`
    ${'' /* border: 1px solid red; */}
    display: flex;
    justify-content: center;
    margin-top: -15px;

    a {
        text-decoration: none;
        font-size: 50px;
        color: #283e48;
    }

    ${'' /* commented out bounce code until I want to spend more time making it work */}
    ${'' /* .bounce {
        animation: bounce 2s infinite;
        -webkit-animation: bounce 2s infinite;
    }

    infinite {
        animation: bounce 2s infinite;
    }

    .fa {
        font-size: 50px;
    }

    @keyframes bounce {
        0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
        }
        40% {
            transform: translateY(-15px);
        }
        60% {
            transform: translateY(-7.5px);
        }
    } */}
`;

const FirstAndThird = styled.div`
    ${'' /* border: 1px solid red; */}
    display: flex;
    justify-content: center;
    margin-top: 80px;
`;

const FirstAndThirdText = styled.div`
    ${'' /* border: 1px solid red; */}
    padding: 0 50px 0 0;
    width: 50%;
    margin: auto 0;
    max-width: 350px;
`;

const FirstAndThirdPic = styled.div`
    ${'' /* border: 1px solid red; */}
    max-width: 350px;
    min-width: 300px;
    padding: 0 0 0 50px;
    display: flex;
    align-items: center;

    img {
        ${'' /* border: 1px solid red; */}
        width: 100%
    }
`;

const Second = styled.div`
    ${'' /* border: 1px solid red; */}
    display: flex;
    justify-content: center;
    margin-top: 80px;
`;

const SecondText = styled.div`
    ${'' /* border: 1px solid red; */}
    padding: 0 0 0 50px;
    width: 50%;
    margin: auto 0;
    max-width: 350px;
`;

const SecondPic = styled.div`
    ${'' /* border: 1px solid red; */}
    max-width: 350px;
    min-width: 300px;
    padding: 0 50px 0 0;
    display: flex;
    align-items: center;

    img {
        ${'' /* border: 1px solid red; */}
        width: 100%
    }
`;

const BottomCTA = styled.div`
    ${'' /* border: 1px solid red; */}
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
        font-size: 24px;
        margin: 80px 0 10px 0;
    }

    button {
        margin-top: 10px;
    }
`;

const Homepage = (props) => {
    
    return (
        <PageWrapper>
            <TopWrapper>
                <ContentWrapper>
                    <HeroText>
                        <h1>Extract LinkedIn profile info in seconds.</h1>
                        <p>LinkedIn Chrome Extension is a Google Chrome extension that let's you easily and quickly pull the profile data you need. Set the fields you want and press Scrape - it's really that easy!</p>
                        <AddExtensionBtn>Add to Chrome for free</AddExtensionBtn>
                    </HeroText>
                    <HeroPic>
                        <img src="https://i.imgur.com/3J6eRNG.png" alt=""/>
                    </HeroPic>
                </ContentWrapper>
            </TopWrapper>
            <BottomWrapper>
                <BounceArrowWrapper class = 'arrow bounce'>
                    <a class = 'fa fa-chevron-down' href="#scroll"></a>
                </BounceArrowWrapper>
                <FirstAndThird className = 'scroll'>
                    <FirstAndThirdText>
                        <h2> Subheader </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </FirstAndThirdText>
                    <FirstAndThirdPic> 
                        <img src="https://i.imgur.com/3J6eRNG.png" alt="" />
                    </FirstAndThirdPic>
                </FirstAndThird>
                <Second>
                    <SecondPic> 
                        <img src="https://i.imgur.com/3J6eRNG.png" alt="" />
                    </SecondPic>
                    <SecondText>
                        <h2> Subheader </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </SecondText>
                </Second>
                <FirstAndThird>
                    <FirstAndThirdText>
                        <h2> Subheader </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </FirstAndThirdText>
                    <FirstAndThirdPic> 
                        <img src="https://i.imgur.com/3J6eRNG.png" alt="" />
                    </FirstAndThirdPic>
                </FirstAndThird>
                <BottomCTA>
                    <h3>Subheader</h3>
                    <AddExtensionBtn>Add to Chrome for free</AddExtensionBtn>
                </BottomCTA>
            </BottomWrapper>
        </PageWrapper>
    )
}

export default Homepage;