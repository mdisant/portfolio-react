import wordle from "../assets/wordle.png";
import style_transfer from "../assets/style_transfer.png";
import msci from "../assets/msci.png";
import massdep from "../assets/massdep.png";
import horse_racing from "../assets/horse_racing.png";
import si330 from "../assets/si330.png";
import twitter_crypto from "../assets/twitter-crypto.png";
import portfolio_2 from "../assets/portfolio-2.png";
import portfolio_3 from "../assets/portfolio-3.png";
import cc_fraud_pred from "../assets/cc-fraud-pred.png";
import nft_gen from "../assets/nft-gen.png";
import house_prices from "../assets/house-prices.png";
import pga from "../assets/pga.jpg";
import nfl_connections from "../assets/nfl-connections.png";

export const ProjectList = [
    {
        name: "NFL Connections",
        link: "nfl-connections",
        image: nfl_connections,
        skills: "Web Development, JavaScript",
        description: "Welcome to the NFL Connections! Your mission is to identify groups of four items that share a common connection within the world of NFL. Select four items that you believe belong to the same category, then tap 'Submit' to check if your guess is accurate. The challenge is to identify these groups without making four incorrect guesses. Stay sharp!",
        ghLink: "https://github.com/mdisant/nfl-connections"
    },
    {
        name: "PGA Predictor",
        link: "pga",
        image: pga,
        skills: "Python, Machine Learning",
        description: "Golf is becoming a data-driven sport, where ShotLink technology is taking over the sport. This has introduced new variables in which players and fans can analyze PGA Tour performances. As deeper and more descriptive data enters the sport, machine learning models can be applied to predict final score outcomes and find the most important data points.",
        ghLink: "https://github.com/mdisant/pga-ml"
    },
    {
        name: "Personal Portfolio 3.0",
        link: "portfolio-3",
        image: portfolio_3,
        skills: "Web Development, JavaScript",
        description: "This is the third iteration of my personal project portfolio. In taking the webpage to the next level, I developed the portfolio using React JS. With faster rendering, iterative development of components, and a greater capacity to showcase my work, I have realized the benefits of using such a powerful library. My favorite part: playing with the particles on the home page.",
        ghLink: "https://github.com/mdisant/portfolio-react"
    },
    {
        name: "House Prices Advanced Regression",
        link: "house-prices",
        image: house_prices,
        skills: "Python, Machine Learning",
        description: "Through training the Random Forest model on standardized housing price data, prices can be predicted with relatively low error. Using the Ames Housing dataset on Kaggle, the model achieved a mean squared error of 0.0192. Additionally, the model uncovered some of the more accurate variables in predicting house prices, including the overall quality, exterior quality, and neighborhood.",
        ghLink: "https://github.com/mdisant/house-prices"
    },
    {
        name: "Credit Card Fraud Detection",
        link: "cc-fraud-pred",
        image: cc_fraud_pred,
        skills: "Python, Machine Learning",
        description: "The Machine Learning Group's Credit Card Fraud Detection dataset provides a clean dataset to practice logistic regression. Here, I apply under and oversampling methods on the data, achieving 92.38% and 95.32% accuracies with the logistic regression model, respectively. Both techniques provide a unique approach to solving the problem, but I learned the importance of deleting and manufacturing data using these methods.",
        ghLink: "https://github.com/mdisant/credit-card-fraud-detection"
    },
    {
        name: "Personal Portfolio 2.0",
        link: "portfolio-2",
        image: portfolio_2,
        skills: "Web Development",
        description: "The second iteration of my personal project portfolio is a complete overhaul of my original page. Focusing on design principles in color and font selection, this version is much more visually appealing. While major improvements were made to the webpage, it is no longer the current iteration of my online presence. ",
        ghLink: "https://github.com/mdisant/portfolio"
    },
    {
        name: "MSCI NLP",
        link: "MSCI-nlp",
        image: msci,
        skills: "Python, Natural Language Processing, Consulting",
        description: "The University of Stellenbosch is working to detect socio-political risks in preventing conflicts in South Africa. My team in the Information Analysis Capstone course at the University of Michigan School of Information developed a model to identify companies associated with risk across South African financial reports. We leveraged natural language processing techniques in word collocation to standardize conflict values, and applied multi-dimensional scaling to prepare the data for machine learning models.",
        ghLink: ""
    },
    {
        name: "Horse Racing Predictions",
        link: "horse-racing",
        image: horse_racing,
        skills: "Python, Machine Learning",
        description: "This final project from the Data Exploration course at UMSI predicts the finish time of horses in Hong Kong horse racing using race conditions and horse attributes. We merged datasets from Kaggle, conducted exploratory data analysis, cleaned the data, and engineered new features before using linear and random forest regression models to make predictions. Our team predicted finish times on the test data with an accuracy of 91.57% using the Random Forest Regressor model.",
        ghLink: ""
    },
    {
        name: "Wordle Solver",
        link: "wordle",
        image: wordle,
        skills: "Python",
        description: "This project analyzed the popular online word-guessing game Wordle using big data, my final project for the Computational Analysis of Big Data course at DIS Copenhagen. My team utilized a dataset of the most common 1/3 million words in the English language and created a solving algorithm using entropy calculations. Through this project, we were able to explore the reasoning and methodology in solving this daily word game.",
        ghLink: "https://github.com/lina-drechsler/WORDLE_SOLVER"
    },
    {
        name: "Art Style Transfer",
        link: "image-style-transfer",
        image: style_transfer,
        skills: "Python, Machine Learning, Neural Networks",
        description: "For my final project in the Artificial Neural Networks and Deep Learning course at DIS Copenhagen, my team explored the use of convolutional neural networks (CNNs) for style transfer in digital images. We implemented TensorFlow's pre-trained model, VGG19, to transform photos into art pieces of any style. We found that matching up photos with art that has similar shapes and patterns is critical for this style transfer model to be successful.",
        ghLink: "https://github.com/mdisant/Art_Style_Transfer"
    },
    {
        name: "NFT Generator",
        link: "nft-gen",
        image: nft_gen,
        skills: "Python",
        description: "During the height of Crypto/NFT mania, I came up with a method to easily create NFTs with different attributes and layers. This program creates unique images, where each iteration has at least one unique feature. The metadata is stored in an external file to display the rarity of each generated image.",
        ghLink: "https://github.com/mdisant/nft-generator"
    },
    {
        name: "MassDep",
        link: "massdep",
        image: massdep,
        skills: "Excel, Consulting",
        description: "My project team for Reach Consulting Group at UMSI consulted for the Massachusetts Department of Environmental Protection to analyze the relationship between environmental justice communities and vehicle inspection failure rates. We created an ArcGIS map overlaying inspection failures in environmental justice communities to assist the department in uncovering outlier regions in the state..",
        ghLink: ""
    },
    {
        name: "SI 330 Portfolio",
        link: "si330-portfolio",
        image: si330,
        skills: "Web Development",
        description: "The first iteration of my personal project portfolio was the final project in my Web Design, Development, and Accessibility course at Michigan. Through showcasing my interests and experience with responsive and inclusive design principles, I learned the requirements of programming your own website from scratch.",
        ghLink: "https://github.com/mdisant/330_final_portfolio"
    },
    {
        name: "Crypto on Twitter Analysis",
        link: "twitter-crypto",
        image: twitter_crypto,
        skills: "Python, SQL",
        description: "This program integrates cryptocurrency price data with Twitter metadata. My final project team in the Data-Oriented Programming course at Michigan utilized the CoinMarketCap API and Twitter API (accessed through the Tweepy Python library). We determined the correlation between the price changes and the number of Tweets to gain insight into how the price changes with respect to Twitter popularity.",
        ghLink: "https://github.com/mdisant/206_final"
    },
];
