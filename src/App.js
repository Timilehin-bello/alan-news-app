import React, { useState, useEffect } from "react";
import "./App.css";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./component/NewsCards/NewsCards";
import { Typography } from "@material-ui/core";
// import wordsToNumbers from "words-to-numbers";
// import logo from "./images/logo.png";
import useStyles from "./styles";

const alanKey =
  "f7a2bfa6b7bc2e45c0a4676850307b8d2e956eca572e1d8b807a3e2338fdd0dc/stage";

function App() {
  const [newsArticles, setNewsArtcle] = useState([]);
  // const [activeArticle, setActiveArticle] = useState(0);
  // const [isOpen, setIsOpen] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          setNewsArtcle(articles);
        }
      },
    });
  }, []);

  return (
    <div className="App">
      <div className={classes.logoContainer}>
        {/* {newsArticles.length ? (
          <div className={classes.infoContainer}>
            <div className={classes.card}>
              <Typography variant="h5" component="h2">
                Try saying: <br />
                <br />
                Open article number [4]
              </Typography>
            </div>
            <div className={classes.card}>
              <Typography variant="h5" component="h2">
                Try saying: <br />
                <br />
                Go back
              </Typography>
            </div>
          </div>
        ) : null} */}
        <img
          src="https://alan.app/voice/images/previews/preview.jpg"
          className={classes.alanLogo}
          alt="logo"
        />
      </div>
      <NewsCards articles={newsArticles} />
    </div>
  );
}

export default App;
