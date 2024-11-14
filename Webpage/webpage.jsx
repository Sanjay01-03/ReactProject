import React from "react";
import './webpage.css';
/*import Image from '../Assets/one.jpg'; */

const WebPage = () =>{
    return(
        <div>
           <header>
            <div class="logo">
                <p>Binge Books</p>
            </div>
            <nav>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Books</a></li>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </nav>
            <div className="search">
                <input type="text" placeholder="Search..." />
                <button type="submit">GO</button> 
            </div>
       </header>
        <div class ="hero">
            <div class="hero-content">
                <h1>Welcome to BingeBooks</h1>
                <p>Unearth the books that inspire you.</p>
            </div>
            <div className="main-content">
                <h2>Noteworthy books</h2>
                <div className="books">
                    <div className="book">
                        <img src='https://i.pinimg.com/474x/06/01/0c/06010cd7bc8bfa36671a1082338fb727.jpg' />
                        <h3>Haunting Adeline</h3>
                        <p>H. D. Carlton</p>
                        <p>$20.99</p>
                    </div>
                    <div className="book">
                        <img src='https://i.pinimg.com/236x/4b/77/82/4b7782df131e084ea722d0d0f5d37a4f.jpg' />
                        <h3>The Night Circus</h3>
                        <p>Erin Morgenstern</p>
                        <p>$30.99</p>
                    </div>
                    <div className="book">
                        <img src='https://i.pinimg.com/474x/e7/3c/1d/e73c1d380bf82203bdca38308291803d.jpg' />
                        <h3>Icebreaker</h3>
                        <p>Hannah Grace</p>
                        <p>$19.79</p>
                    </div>
                </div>
            </div>
            <a href="" class="btn">View All Books</a>
        </div>
        <footer>
            <p>&copy; 2024 Binge Books. All Rights Reserved </p>
        </footer>
     </div>   
    );
};
 export default WebPage;
