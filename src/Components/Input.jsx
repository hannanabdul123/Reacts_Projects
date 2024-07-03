const Input=()=>{
    return(
        <div className="inpt">
        <input type="text" id="Name" placeholder="Name" />
        <input type="email" id="Email" placeholder="Email" />
        <input type="text" id="Text" placeholder="Message" />
        <button className="submit-button">Submit</button>
      </div>
    )
}
export default Input;