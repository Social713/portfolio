import { ProGallery } from 'pro-gallery';
import 'pro-gallery/dist/statics/main.css';
import BusinessPage from '../images/BusinessPage.png';
import BlackJack from '../images/BlackJack.png';
import Blog from '../images/Blog.jpeg';

export const Gallery=()=> {

    // Add your images here...
    const items = [
            { // Image item:
                    itemId: 'sample-id',
                    mediaUrl: BusinessPage,
                    metaData: {
                            type: 'image',
                            height: 200,
                            width: 100,
                            title: 'sample-title',
                            description: 'sample-description',
                            focalPoint: [0, 0],
                            link: {
                                    url: 'https://www.opulentbeautyandwellness.com',
                                    target: '_blank'
                            },
                    }
            },
            { // Another Image item:
                    itemId: 'differentItem',
                    mediaUrl: BlackJack,
                    metaData: {
                            type: 'image',
                            height: 200,
                            width: 100,
                            title: 'sample-title',
                            description: 'sample-description',
                            focalPoint: [0, 0],
                            link: {
                                    url: 'http://example.com',
                                    target: '_blank'
                            },
                    }
            },
            { 
                    itemId: 'htmlItem',
                    mediaUrl: Blog,
                    metadata: {
                            type: "image",
                            height: 200,
                            width: 300,
                            title: 'Blog',
                            description: 'Coming Soon',
                            focalPoint: [0, 0],
                            link: {
                                    url: 'http://example.com',
                                    target: '_blank'
                    },

            },
            }]


    // The options of the gallery (from the playground current state)
    const options = {
      galleryLayout: -1,
      cubeImages: true,
      overlayBackground: 'rgba(225,219,219,0.75)',
    };

    // The size of the gallery container. The images will fit themselves in it
    const container = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    // The eventsListener will notify you anytime something has happened in the gallery.
    const eventsListener = (eventName, eventData) => console.log({eventName, eventData}); 

    // The scrollingElement is usually the window, if you are scrolling inside another element, suplly it here
    const scrollingElement = window;

    return (<div>
      <ProGallery 
        items={items}
        options={options}
        container={container}
        eventsListener={eventsListener}
        scrollingElement={scrollingElement}
      /></div>
    );
  }