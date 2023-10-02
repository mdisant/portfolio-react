import wordle from "../assets/wordle.png";
import style_transfer from "../assets/style_transfer.png";
import msci from "../assets/msci.png";
import massdep from "../assets/massdep.png";
import horse_racing from "../assets/horse_racing.png";

export const ProjectList = [
    {
        name: "Wordle Solver",
        link: "wordle",
        image: wordle,
        skills: "Big Data, Python",
        description: "This project analyzed the popular online word-guessing game WORDLE using big data. This was my final project for the Computational Analysis of Big Data course at DIS Copenhagen. My team utilized a dataset of the most common 1/3 million words in the English language and created a solving algorithm using entropy calcuations.",
        ghLink: "https://github.com/lina-drechsler/WORDLE_SOLVER"
    },
    {
        name: "Art Style Transfer",
        link: "image-style-transfer",
        image: style_transfer,
        skills: "Neural Networks, TensorFlow, Python",
        description: "For my final project in the Artificial Neural Networks and Deep Learning course at DIS Copenhagen, my team explored the use of convolutional neural networks (CNNs) for style transfer in digital images. We implemented TensorFlow's pre-trained model, VGG19, to transform photos into art pieces of any style. We found that matching up photos with art that has similar shapes and patterns is critical for this style transfer model to be successful.",
        ghLink: "https://github.com/mdisant/Art_Style_Transfer"
    },
    {
        name: "MSCI NLP",
        link: "MSCI-nlp",
        image: msci,
        skills: "Natural Language Processing, Consulting, Python",
        description: "The University of Stellenbosch and Center for Conflict and Collaboration are using NLP to detect socio-political risks and prevent conflicts in South Africa. My team in the Information Analysis Capstone course at the Unviersity of Michigan School of Information (UMSI) developed a more accurate model by identifying feature importance and standardized values for word collocation across Morgan Stanley Capital International (MSCI) All-World Index annual reports.",
        ghLink: ""
    },
    {
        name: "Horse Racing Predictions",
        link: "horse-racing",
        image: horse_racing,
        skills: "Machine Learning, Python",
        description: "This final project from the Data Exploration course at UMSI attempted to predict the finish time of horses in Hong Kong horse racing using a combination of race and horse attributes, as well as trainer and jockey quality. We merged datasets from Kaggle, conducted exploratory data analysis, cleaned the data, and engineered new features before using linear and random forest regression models to make predictions.",
        ghLink: ""
    },
    {
        name: "MassDep",
        link: "massdep",
        image: massdep,
        skills: "Data Analysis, Excel, ArcGIS, Consulting",
        description: "My project team for Reach Consulting Group at UMSI consulted for the Massachusetts Department of Environmental Protection to analyze the relationship between environmental justice communities and vehicle inspection failure rates. Ultimately, we created an ArcGIS map overlaying inspection failures in environmental justice communities.",
        ghLink: ""
    },
];