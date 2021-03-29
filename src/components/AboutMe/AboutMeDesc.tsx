import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        fontSize: {
            fontSize: 16
        }
    }),
);

export default function AboutMeDesc() {
    const classes = useStyles();

    return (
        <p className={classes.fontSize}>
            While working in a call center at Fidelity Investments, I had the
            opportunity to educate thousands of IBM employees about their
            health insurance amongst many other job-related benefits. Through
            casual conversation about their roles and programming in general,
            I became motivated to pursue a career in computer programming.
            After some soul-searching and research, I discovered
            a coding bootcamp offered at UNC Chapel Hill. I read stories about
            others who had found success through hard work and time commitment.
            <br/>
            <br/>
            Fast-forward to now, I am a Full Stack Web Developer located
            in Apex, NC working out of the Research Triangle area eager to start
            a new adventure designing and maintaining the complexities of your
            applications.
        </p>
    );
}
