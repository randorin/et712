import React from "react";
import './index.css'
const UserFeedback = function(props){
return(
<>
<div className="feedbackcontainer">
<section className="feedbackcard">
<div className="content"><p>{props.username}</p></div>
<div className="description">{props.children}</div>
<div className="cardfooter">
<p className="addicon"><span>&#10011;</span>Add feedback</p>
</div>
</section>
</div>
</>
)
}

export default UserFeedback;