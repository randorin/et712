import React from "react";
import avataruser1 from './images/batman.png';
const User = function(props){
return(
<>
<section className="card">
<a> <img src={ avataruser1 }/> </a>
<div className="content">
<a className="author">Batman</a>
</div>
<div className="metadata">
<p>Posted on <span className="date"> TODAY </span></p>
</div>
<div className="comment">
<p>"<i> testing message</i>"</p>
</div>
</section>
</>
)
}
export default User;