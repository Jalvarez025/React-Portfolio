import React from "react";
import Typewriter from "typewriter-effect";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles({
    root: {
        color: "black",
        padding: "10px",
        fontSize: "50px",
        textAlign: "center",
    },
    img: {
        height: "30%",
        width: "30%",
        padding: "20px"
    }
});


function Home() {
    const classes = useStyles();

    return (
        <div>
            <Container className={classes.root}>
                <img className={classes.img}
                    src={require("../assets/jesse.png")}
                    alt="bitmoji version of me"
                ></img>
                <Typewriter
                    options={{
                        strings: [
                            "Hello, my name is Jesse!",
                            "I am from Houston, TX",
                            "I am a Full Stack Web Developer",
                        ],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </Container>
        </div>
    );
}

export default Home;
