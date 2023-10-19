import Post from './Post.jsx';
import './View.css';

// fetch from localhost3000

function View() {

    const posts = [
        {
            title: "Nikas Ghimire",
            src: "https://picsum.photos/500",
            description: "Lorem ipsum dolor sit amet"
        },
        {
            title: "Nikas Ghimire",
            src: "https://picsum.photos/500",
            description: "Lorem ipsum dolor sit amet"
        },
        {
            title: "Nikas Ghimire",
            src: "https://picsum.photos/500",
            description: "Lorem ipsum dolor sit amet"
        },
        {
            title: "Nikas Ghimire",
            src: "https://picsum.photos/500",
            description: "Lorem ipsum dolor sit amet"
        },
        {
            title: "Nikas Ghimire",
            src: "https://picsum.photos/500",
            description: "Lorem ipsum dolor sit amet"
        },
        {
            title: "Nikas Ghimire",
            src: "https://picsum.photos/500",
            description: "Lorem ipsum dolor sit amet"
        },
        {
            title: "Nikas Ghimire",
            src: "https://picsum.photos/500",
            description: "Lorem ipsum dolor sit amet"
        },
        {
            title: "Nikas Ghimire",
            src: "https://picsum.photos/500",
            description: "Lorem ipsum dolor sit amet"
        }
    ];

    const components = posts.map((item, index) => (
        <Post title={`${index + 1} - ${item.title}`} src={item.src} description={item.description} />
    ));

    return (

        <div className="view">

            {components}

        </div>

    );
}

export default View;