import '../style/page2.css'
import Signup from '../images/Hands2.jpg'
import Icon from '../images/gicon.jpg'


const Page2 = () => {

    return(
        <div>
            <div class="bg1">
        <div> 
        <img src={Signup}  class="thumbnail"/>
        </div>
<div class="wrapper">
        <div class="inputbox">
            <header>SIGNUP</header>
        </div>
    <form action="#"/>
        <div class="infield6">
            <label for="name">NAME : </label>
            <input type="text" class="in" id="name" placeholder="Navyaa"  required/>
        </div>
    
    <div class="infield3">
        <label for="email">EMAIL : </label>
        <input type="email" class="in" id="email" placeholder="navyaa23@gmail.com"  required/>
    </div>
    <div class="infield4">
        <label for="password">PASSWORD : </label>
        <input type="password" class="in" name="password" id="password" placeholder="password" required/>
    </div>
    <div class="button">
        <input type="radio" class="radio1" name="r1"/>
          <label >DONOR</label>
          <input type="radio" class="radio2" name="r1"/>
          <label>ORPHANAGE</label>
    </div>
    <div class="infield5">
        <input type="submit" class="submits" value="SIGNUP"/>
    </div>
    <div class="orrr">
        <p>or</p>
    </div>
    
          <div>
            <img src={Icon} class="icon1"/>
           </div>
      
  
        <div class="signinn">
            <span>Aldready a user <a href="login.html">LogIn</a></span>
        </div>


</div> 
</div>
</div>
    );

}

export default Page2;
