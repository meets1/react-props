
const Image = (props) => {
    // const clickHandler = () =>{

    // }
    //  const Ex = (props) => {
    //    console.log(props);
    //  } 

    return (
        <>
            <div className='box'
            //  onMouseOver={() => {
            //    console.log('hello');
            //  }}
            >
                <img src={props.img} id='img1' alt=''></img>
                <h4 style={{ color: "#222", padding: "0.6rem", margin: "-0.5rem" }}>
                    {props.text}
                </h4>
                <a href={props.to} target="_blank" rel="noreferrer">
                    <button type="button" className="btn btn-dark" /*onClick={eventHandler}*/> Watch now</button>
                </a>
                {/* <button type = "button" onClick={()=> Ex(props)}>Demo</button> */}
            </div>
        </>
    )
}

export default Image;       