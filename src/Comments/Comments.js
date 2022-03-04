import React from "react";

class Comments extends React.Component {

    constructor() {
        super()
        this.state = { commentsData: [] };
    }

    componentDidMount() {
        console.log('hey')
        this.fetchComments();
    }

    fetchComments = () => {
        fetch('https://my.api.mockaroo.com/comments.json?key=6d63da50')
            .then(response => response.json())
            .then(data => this.setState({ commentsData: data }));
    };

    // fetchComments();

    multipleComments = () => {
        console.log(this.state.commentsData)
        return this.state.commentsData.map((comment, index) => <div className="App-box" key={index}>
            <p>{comment.username}</p>
            <span>{comment.lastVisit}</span>
            <img src={comment.img}></img>
            <a href="#">reply</a>
            <p>{comment.comment}
            </p>
        </div>
        )
    }


    render() {
        return (
            <>
                {console.log('state', this.state)}
                {this.multipleComments()}
            </>
        )
    }
}
export default Comments;