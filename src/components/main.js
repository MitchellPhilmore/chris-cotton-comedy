import React, { Component } from 'react';
import Form from "./form";
import img from '../images/ccb.jpg'
import img2 from '../images/chris-cotton-album1.PNG'
import img3 from '../images/chris-cotton-album2.JPG'
import chrisvid1 from '../images/chrisvid1.mp4'
import chrisvid2 from '../images/chris-cotton-vid2.MP4'
class Main extends Component {
  render() {
    return (
      <main>
       
     
        <section className="intro">
            <h2>Bio</h2>
            <div>
             <p>Chris Cotton began performing Stand Up Comedy in the same city where he was born and
raised in (Philadelphia, Pennsylvania). Chris worked as a Digital Creator at Comedy Central,
while co-starring in Comedy Central: Every Damn Day. Chris has worked with many of the best
national headliners including Ali Siddiq, Artie Lange, Keith Robinson, Godfrey, Bret Ernst,
Tommy Davidson, Kevin Hart, Judah Frielander, and Hannibal Burress. His Stand Up Comedy
Set topics include pop culture, current events, being married, and growing up in the city.
Equipped with an easy going style, Chris is rapidly gaining popularity. As an author, Mr. Cotton
released a book titled “What My Dad Did” and has written and acted in numerous sketches,
television shows and contributed to developing commercial advertising. When he is not
performing Chris enjoys spending time with his lovely wife.</p>
            </div>
        </section>

        <div>
             <div className="services">
                <div className="service-one">
                <img style={{width:'100%'}} src={img}/>
                <p className="service-title">What My Dad Did</p>
                <p>Chris Cotton’s goal was to write a quick read, that can be referenced for most of your career as an artist of any capacity. “What My Dad Did” sprints through the story of how my Dad built his teaching career and how his actions shaped my comedy career. </p>
                <h3><a target="_blank" href="http://www.lulu.com/content/paperback-book/what-my-dad-did-my-theory-on-joke-writing-what-my-dad-did/25000202">Paperback</a></h3>
                <h3><a target="_blank" href="http://www.lulu.com/shop/chris-cotton/what-my-dad-did-my-theory-on-joke-writing-what-my-dad-did/ebook/product-24192008.html">E-Book</a></h3>
                </div>
                <div className="service-two">
                <img style={{width:'100%',height:'50%'}} src={img2}/>
                <p className="service-title">Dive Bar Secrets Vol. 2</p>
                <p>Available on all streaming platforms</p>
                <h3><a target="_blank" href="https://music.apple.com/us/album/dive-bar-secrets-vol-2-generation-gap/1319591113

">ITunes</a></h3>
                <h3><a target="_blank" href="https://play.google.com/store/music/album/Various_Artists_Dive_Bar_Secrets_Vol_2_Generation?id=Bcz7x6zgpvphuenuhqu62v55tye&hl=en

">Google Play</a></h3>
               
            
                </div>
                <div className="service-three">
                <img style={{width:'100%',height:'50%'}} src={img3}/>
                <p className="service-title">Dive Bar Secrets Vol. 1</p>
                <p>Available on all streaming platforms</p>
                <h3><a target="_blank" href="https://music.apple.com/us/album/dive-bar-secrets-vol-1-placism-the-black-perspective/1169790367

">ITunes</a></h3>
                <h3><a target="_blank" href="https://play.google.com/store/music/album/Chris_Cotton_Dive_Bar_Secrets_Vol_1_Placism_the_Bl?id=Bmxks5xdtibaddalrxzpjbm6tny&hl=en

">Google Play</a></h3>
              
          </div>
        </div>

            </div>


        
        <div className="gallery">
         {/* <div className="gallery-item-one"></div>
         <div className="gallery-item-two"></div>
         <div className="gallery-item-three"></div>
         <div className="gallery-item-four"></div>
         <div className="gallery-item-five"></div>
         <div className="gallery-item-six"></div> */}
         <video controls autoplay>
           <source src={chrisvid1} type="video/mp4"></source>
         </video>
        
         
        </div>

        <section>
            <h2>Our Mission</h2>
            <div>
              <p>Integer sit amet venenatis erat. Cras elementum tortor odio, sit amet euismod nunc cursus ut. Donec sollicitudin orci sed enim volutpat, volutpat rutrum magna semper. Fusce leo lacus, pulvinar sit amet dignissim in, consectetur eget nulla. Etiam ac turpis augue. Sed tincidunt pulvinar tincidunt. Integer ac blandit magna. Nulla dapibus convallis luctus. </p>
              <p>Ut elementum urna sit amet elit egestas hendrerit. Vivamus quis sem fringilla, tincidunt nisi non, congue libero. Etiam cursus nulla quis sapien varius, eget accumsan augue mattis. Cras accumsan sapien nulla, eu eleifend odio tempus sit amet. Suspendisse gravida hendrerit sapien, ut molestie mi pellentesque eget. Aliquam eleifend velit vel libero elementum, vitae consectetur nisl sollicitudin. Suspendisse volutpat fringilla vehicula.</p>
              </div>
        </section>


        <section>
            <h2>Contact Me</h2>
            <Form />
          
        </section>

       
      </main>
    );
  }
}

export default Main;
