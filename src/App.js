import React, { useState } from "react";
import "./App.css";
import alanBtn from "@alan-ai/alan-sdk-web";
import { useEffect } from "react";
import NewsCards from "./component/NewsCards/NewsCards";

const alanKey =
  "f7a2bfa6b7bc2e45c0a4676850307b8d2e956eca572e1d8b807a3e2338fdd0dc/stage";

function App() {
  const [newsArticles, setNewsArtcle] = useState([]);
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
      <h1>Alan News Application</h1>
      <NewsCards articles={newsArticles} />
    </div>
  );
}

export default App;
