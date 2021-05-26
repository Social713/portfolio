import David from '../images/David.jpeg';
import SmallBusiness from '../images/SmallBusiness.jpeg';
import Blog from '../images/Blog.jpeg';
import BJJ from '../images/BJJ.jpg';
import BlackJack from '../images/BlackJack.png';

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
    image: SmallBusiness,
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
    technologies: "HTML CSS Javascript"
},
];

