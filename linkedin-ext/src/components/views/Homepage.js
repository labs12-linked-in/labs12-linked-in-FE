import React from 'react';
import styled from 'styled-components';
import homepageHero from '../../images/homepage-hero.svg';
import linkedinLogo from '../../images/logoBlueLong.svg';
import scrape from '../../images/homepageScrape.svg';
import template from '../../images/homepageTemplates.svg';

// **************** STYLED COMPONENETS ****************
const PageWrapper = styled.div`
    ${'' /* border: 1px solid red; */}
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

const TopWrapper = styled.div`
    ${'' /* border: 1px solid red; */}
    height: 600px;
    background: url("https://i.imgur.com/9cMSTU1.jpg");
    background-size: cover;
    width: 100%;
    display: flex;
    justify-content: center;

    @media (max-width: 850px) {
        height: 500px;
    }
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
    padding: 0px 10px 0 0;
    color: white;
    text-shadow: 2px 4px 3px rgba(0,0,0,0.3);
    margin: auto 125px auto 50px;

    @media (max-width: 850px) {
        text-align: center;
        margin: auto 
    }

    h1 {
        line-height: 35px;
        letter-spacing 2px;
        font-size: 40px;
        color: white;
    }

    p {
        ${'' /* border: 1px solid red; */}
        line-height: 25px;
        margin-top: 30px;
        font-size: 24px;
        color: white;
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
    margin: auto 50px auto 0;
    
    @media (max-width: 850px) {
        display: none;
    }

    img {
        ${'' /* border: 1px solid red; */}
        width: 350px;
    }
`;

const BottomWrapper = styled.div`
    ${'' /* border: 1px solid red; */}
    font-size: 22px;
`;

const First = styled.div`
    ${'' /* border: 1px solid red; */}
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    height: 400px;
    background-color: #3B9FC1;

    @media (max-width: 850px) {
        flex-direction: column;
        height: 475px;
    }

    h2 {
        ${'' /* border: 1px solid red; */}
        margin-bottom: 10px;
        color: white;
    }

    p {
        margin-top: 0;
        color: white;

        @media (max-width: 850px) {
            margin-bottom: 0;
        }
    }
`;

const FirstText = styled.div`
    ${'' /* border: 1px solid red; */}
    width: 400px;
    max-width: 400px;
    min-width: 350px;
    margin-left: 75px;
    margin-right: 60px;

    @media (max-width: 850px) {
        order: 2;
        text-align: center;
        margin: 0
    }
`;

const FirstPic = styled.div`
    ${'' /* border: 1px solid red; */}
    width: 250px;
    min-width: 250px;
    display: flex;
    align-items: center;
    margin-left: 60px;
    margin-right: 75px;

    @media (max-width: 850px) {
        width: 150px;
        min-width: 150px;
        margin: 0;
    }

    img {
        ${'' /* border: 1px solid red; */}
        width: 100%
    }
`;

const Second = styled.div`
    ${'' /* border: 1px solid red; */}
    display: flex;
    justify-content: center;
    align-items: center
    height: 400px;

    @media (max-width: 850px) {
        flex-direction: column;
    }

    h2 {
        ${'' /* border: 1px solid red; */}
        margin-bottom: 10px;
    }

    p {
        margin-top: 0;

        @media (max-width: 850px) {
            margin-bottom: 0;
        }
    }
`;

const SecondPic = styled.div`
    ${'' /* border: 1px solid red; */}
    display: flex;
    width: 300px;
    max-width: 300px;
    min-width: 300px;
    align-items: center;
    margin-left: 175px;
    margin-right: 45px;

    @media (max-width: 850px) {
        width: 200px;
        min-width: 200px;
        margin: 0;
    }

    img {
        ${'' /* border: 1px solid red; */}
        width: 100%
    }
`;

const SecondText = styled.div`
    ${'' /* border: 1px solid red; */}
    width: 400px;
    max-width: 400px;
    min-width: 350px;
    margin-left: 45px;
    margin-right: 175px;

    @media (max-width: 850px) {
        text-align: center;
        margin: 0
    }
`;


const Third = styled.div`
    ${'' /* border: 1px solid red; */}
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    height: 400px;
    background-color: #005B7A;

    @media (max-width: 850px) {
        flex-direction: column;
        height: 450px;
    }

    h2 {
        ${'' /* border: 1px solid red; */}
        margin-bottom: 10px;
        color: white;
    }

    p {
        margin-top: 0;
        color: white;

        @media (max-width: 850px) {
            margin-bottom: 0;
        }
    }
`;

const ThirdText = styled.div`
    ${'' /* border: 1px solid red; */}
    width: 400px;
    max-width: 400px;
    min-width: 350px;
    margin-left: 100px;
    margin-right: 35px;

    @media (max-width: 850px) {
        order: 2;
        text-align: center;
        margin: 0
    }
`;

const ThirdPic = styled.div`
    ${'' /* border: 1px solid red; */}
    width: 300px;
    min-width: 300px;
    display: flex;
    align-items: center;
    margin-left: 35px;
    margin-right: 100px;

    @media (max-width: 850px) {
        width: 250px;
        min-width: 250px;
        margin: 0;
    }

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
    margin-bottom: 100px;

    h3 {
        font-size: 24px;
        margin: 40px 0 10px 0;
    }

    button {
        margin-top: 10px;
    }
`;
// ****************************************************

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
                        <img src={homepageHero} alt=""/>
                    </HeroPic>
                </ContentWrapper>
            </TopWrapper>
            <BottomWrapper>
                <First>
                    <FirstText>
                        <h2>Effortlessly scrape</h2>
                        <p>We've done all the work for you. All info you'd want to scrape from a LinkedIn profile is available - all you need to do is choose what you want from a list of options.</p>
                    </FirstText>
                    <FirstPic> 
                        <img src={scrape} alt="" />
                    </FirstPic>
                </First>
                <Second>
                    <SecondPic> 
                        <img src={linkedinLogo} alt="" />
                    </SecondPic>
                    <SecondText>
                        <h2>Made for LinkedIn</h2>
                        <p>LinkedIn Chrome Extension was made solely for LinkedIn and nothing else. This means you can always count on it to be the most reliable and easy-to-use scraper for LinkedIn.</p>
                    </SecondText>
                </Second>
                <Third>
                    <ThirdText>
                        <h2>Create templates</h2>
                        <p>Save groups of fields you commonly scrape into templates and then choose which template you'd like to use as you scrape different profiles.</p>
                    </ThirdText>
                    <ThirdPic> 
                        <img src={template} alt="" />
                    </ThirdPic>
                </Third>
                <BottomCTA>
                    <h3>Start scraping for free now!</h3>
                    <AddExtensionBtn>Add to Chrome</AddExtensionBtn>
                </BottomCTA>
            </BottomWrapper>
        </PageWrapper>
    )
}

export default Homepage;