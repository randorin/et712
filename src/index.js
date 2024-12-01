import React from 'react';
import ReactDOM from 'react-dom/client';
// import files
import './index.css';
import User from './comments'
const App = function(){
return(
<>
<h1 style={{textAlign:"center"}}>Student's full name</h1>
<section className='container'>
{/* user 1 */}
<User />
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