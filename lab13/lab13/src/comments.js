import React from 'react';
import ReactDOM from 'react-dom/client';
// import all images
import avataruser1 from './images/batman.png';
import avataruser2 from './images/businessman.png';
import avataruser3 from './images/lady.webp';
// import files
import UserFeedback from './userfeedback';
import './index.css';
import User from './comments'
const App = function(){
return(
<>
<h1 style={{textAlign:"center"}}>Betsy Zhang</h1>
<section className='container'>
    {/* user 1 */}
<UserFeedback><User name="Batman" image={avataruser1} date="11/12/24"
msg="I am Batman"/></UserFeedback>
{/* user 2 */}
<UserFeedback><User name="Peter" image={avataruser2} date="10/03/24" msg="I
am late!"/></UserFeedback>
{/* user 3 */}
<UserFeedback><User name="Lady" image={avataruser3} date="08/20/24"
msg="Get more rest"/></UserFeedback>
</section>
</>
)
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
<App />
</React.StrictMode>
);
export default App;