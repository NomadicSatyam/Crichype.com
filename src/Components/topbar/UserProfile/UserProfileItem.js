import "./UserProfileItem.css"

function UserProfileItem(props){
    return(
      <li className = 'UserProfileItem'>
        <img src={props.img}></img>
        <a > {props.text} </a>
      </li>
    );
  }

  export default UserProfileItem