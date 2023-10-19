import './Post.css';

function Post(props){
    return(
        <>
        <div className="post">
        <p class="title">{props.title}</p>
        <img src={props.src} alt="" />
        <p>{props.description}</p>
        </div>
        </>
    );
}

export default Post;