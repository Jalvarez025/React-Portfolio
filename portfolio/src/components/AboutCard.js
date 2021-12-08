import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import DescriptionIcon from "@material-ui/icons/Description";
import GetAppIcon from "@material-ui/icons/GetApp";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 500,
        justifyContent: "center",
        margin: "25px",
        background: "white",
        [theme.breakpoints.down("sm")]: {
            marginBottom: "55px",
        },
        [theme.breakpoints.down("lg")]: {
            backgroundColor: "white",
            marginBottom: "55px",
        },
    },
    media: {
        height: "350px",
        paddingTop: "56.25%",
    },
    expand: {
        transform: "rotate(0deg)",
        marginLeft: "auto",
        transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: "rotate(180deg)",
        marginBottom: "20px",
    },
    avatar: {
        backgroundColor: "#f73378",
    },
}));

export default function AboutCard() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        MS
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings" target="_blank" href={require("../assets/images/Jesse_Resume2021.pdf")}>
                        <GetAppIcon />
                        <DescriptionIcon />
                    </IconButton>
                }
                title="Jesse Alvarez"
                subheader="Full Stack Web Developer"
            />
            <CardMedia
                className={classes.media}
                image={require("../assets/images/contact.png")}
                title="Jesse"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    I graduated from the University of Houston on May 2021.
                    My degree is a bachelors of science in Computer engineering technology.
                    I am currently undertaking a coding bootcamp delivered by the University of Texas at Austin.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton
                    aria-label="email"
                    href="jalvarez025@yahoo.com"
                    target="_blank"
                >
                    <MailOutlineIcon />
                </IconButton>
                <IconButton
                    aria-label="github"
                    href="https://github.com/Jalvarez025"
                    target="_blank"
                >
                    <GitHubIcon />
                </IconButton>
                <IconButton
                    aria-label="linkedin"
                    href="https://www.linkedin.com/in/jesse-alvarez-a73092129/"
                    target="_blank"
                >
                    <LinkedInIcon />
                </IconButton>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Languages:</Typography>
                    <Typography paragraph>
                        HTML, CSS, Javascript, GIT, JQuery, Node.js, MySQL, Sequelize,
                        MongoDB, Mongoose, Handlebars, Command-Line, React
                    </Typography>
                    <Typography paragraph></Typography>
                    <Typography paragraph></Typography>
                    <Typography></Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}
