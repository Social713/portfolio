import Laptop from '../images/Laptop.jpeg';
import SmallBusiness from '../images/SmallBusiness.jpeg';
import BlackJack2 from '../images/BlackJack2.jpeg';
import Blog from '../images/Blog.jpeg';
import { scrollToAbout, scrollToPortfolio} from '../components/functions/scroll.jsx';

export const SliderData = [
    {
        name: "David Rogers", 
        title: 'Software Engineer',
        path: scrollToAbout,
        label: 'Who am I?', 
        image: Laptop,
        alt: 'Picture of David'
    },
    {
        name: "Helping Businesses", 
        title: 'Go online',
        path: scrollToPortfolio,
        label: 'View Work', 
        image: SmallBusiness,
        alt: 'Picture of business page'
    },
    {
        name: "BlackJack", 
        title: 'Portfolio',
        path: scrollToPortfolio,
        label: 'View Project', 
        image: BlackJack2,
        alt: 'Picture of Blackjack application'
    },
    {
        name: "Blog", 
        title: 'To share my journey',
        path: scrollToPortfolio,
        label: 'Coming Soon', 
        image: Blog,
        alt: 'Picture of Blogsite'
    }
]