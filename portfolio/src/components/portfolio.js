import React from 'react'

export default function portfolio() {
    return (
        <div>
            <header>
                <h1 class="name">Jesse Alvarez</h1>
                <nav>
                    <ul>
                        <li><a href="#aboutme">About Me</a></li>
                        <li><a href="#work">Work</a></li>
                        <li><a href="#contactme">Contact Me</a></li>
                        <li><a href="https://drive.google.com/file/d/10MG6IcfzGaxoAxDRqNg48A74B3dAtYyB/view?usp=sharing">Resume</a></li>
                    </ul>
                </nav>
            </header>
            {/* <div class="hero-image">
                <img class="hero-image" />
                <div class="hero-text">
                    <h1 style="font-size: 25px;">Skills to pay the bills!</h1>
                </div>
            </div> */}
            <div class="row1">
                <div class="column1">About Me</div>
                <div class="column2">I graduated from the University of Houston on May 2021. My degree is a bachelors of science in Computer engineering technology. I am currently undertaking a coding bootcamp delivered by the University of Texas at Austin.</div>
            </div>

            {/* <div class="row2">
                <div class="column1">Work</div>

                <div class="column2">
                    <section class="box0">
                        <img class="image1" />
                        <a href="https://wtriii.github.io/Project-1-Movie-Comparison-Site/" class="projectText1">
                            <h2 style="font-size: 25px;">Project 1</h2>
                        </a>
                        <a href="https://github.com/WTRIII/Project-1-Movie-Comparison-Site" class="projectText1">
                            <h2 style="font-size: 25px;">Repo</h2>
                        </a>
                    </section>

                    <section class="box">
                        <img class="image2" />
                        <a href="https://project2-group8.herokuapp.com/login" class="projectText2">
                            <h2 style="font-size: 25px;">Project 2</h2>
                        </a>
                        <a href="https://github.com/samkilpatrick903/Full-Stack-Appointment-App" class="projectText1">
                            <h2 style="font-size: 25px;">Repo</h2>
                        </a>
                        <img class="image4" />
                        <div class="projectText4">
                            <h2 style="font-size: 25px;">Project 3</h2>
                        </div>

                        <img class="image3" />
                        <div class="projectText3">
                            <h2 style="font-size: 25px;">Project 4</h2>
                        </div>
                        <img class="image5" />
                        <div class="projectText5">
                            <h2 style="font-size: 25px;">Project 5</h2>
                        </div>
                    </section>


                </div>
            </div> */}

            <div class="row3">
                <div class="column1">Contact Me</div>
                <footer class="column2">
                    <ul class="contactList">
                        <li class="contactMenu"><a>832.315.0734</a></li>
                        <li class="contactMenu"><a>jalvare025@gmail.com</a></li>
                        <li class="contactMenu"><a href="https://github.com/Jalvarez025">GitHub</a></li>
                        <li class="contactMenu"><a href="https://www.linkedin.com/in/jesse-alvarez-a73092129/">Linkedin</a></li>
                    </ul>
                </footer>
            </div>


        </div>
    )
}
