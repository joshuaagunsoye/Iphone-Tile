import socials from './../fakeapi/socials.json';
const Followers = () => {
    const multipleSocial = () => {
        
        return socials.map((element, index) => 
         <div className="App-box" key={index}>
            <p>@nathanf</p>
            <p>{element.followers}</p>
            <p>FOLLOWERS</p>
            <p>12 Today</p>
        </div>
        )
    }

    const overView = () =>{
        
        return (
        <div className='App-box'>
            <p>Overview - Today</p>
            <p>Page Views</p>
            <p>87</p>
        </div>
        )

    }

    return (
        <>
        {multipleSocial()}
        {overView()};
        </>
        
    )
}

export default Followers