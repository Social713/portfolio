import David from '../images/David.jpeg';
import BusinessPage from '../images/BusinessPage.png';
import Blog from '../images/Blog.jpeg';
import BJJ from '../images/BJJ.jpg';
import BlackJack from '../images/BlackJack.png';
import Newsletter from '../images/Newsletter.jpeg';

// 1st section
export const InfoData = [{
    heading: "Who Am I?",
    paragraphOne: 'Hi, my name is David Rogers. I am a Software Engineer with a focus on JavaScript, specializing in React, Node.js., and MongoDB.',
    paragraphTwo: '',
    image: David,
    image2: BJJ,
    reverse: false,
    delay: 100
}];

// 2nd section
export const InfoData2 = [{
    heading: "Opulent Beauty and Wellness",
    paragraphOne: 'Helping a small business get off the ground and do what it loves.',
    image: BusinessPage,
    animation: "zoom-out-right",
    technologies: "HTML CSS"
},
{
    heading: "Blog",
    paragraphOne: 'Coming Soon...',
    image: Blog,
    animation: "zoom-out",
    technologies: "React"

},
{
    heading: "BlackJack",
    paragraphOne: '	A card game in which the object is to accumulate cards with a higher count than that of the dealer but not exceeding 21. Try man vs computer!',
    image: BlackJack,
    animation: "zoom-out-left",
    technologies: "Javascript HTML CSS "
},
{
    heading: "Newsletter",
    paragraphOne: `Email users a newsletter using Mailchimp's API`,
    image: Newsletter,
    animation: "zoom-out-right",
    technologies: "Javascript HTML CSS Bootstrap"
},
];

