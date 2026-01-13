import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="logo" className="w-28 object-contain" />
        <div className="flex">
          <button
            type="button"
            onClick={() =>
              window.open("https://github.com/TusharC19/Sumz/tree/main")
            }
            className="github_btn"
          >
            GitHub
          </button>
          <button
            type="button"
            onClick={() =>
              window.open(
                "https://rapidapi.com/restyler/api/article-extractor-and-summarizer/"
              )
            }
            className="rapidapi_btn"
          >
            Rapid API
          </button>
        </div>
      </nav>

      <h1 className="hero_title">
        Turn Long Reads into <br className="max-md:hidden" />
        <span className="gradient_text">Smart Summaries</span>
      </h1>
      <h2 className="hero_subtitle">
        Simplify your reading with an open‑source AI summarizer that transforms
        lengthy articles into clear, concise summaries.
      </h2>
    </header>
  );
};

export default Hero;
