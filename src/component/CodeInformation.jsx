import "../css/CodeInformation.css";
export default function CodeInformation() {
  return (
    <span className="CodeInformation">
      <div className="row gx-0 mt-1 d-flex justify-content-center">
        <div className="col-12 col-lg-6">
          coded by
          <a
            href="https://www.linkedin.com/in/nedaashkan/"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-link social-media-links"
          >
            neda ashkan
          </a>
          , open-sourced on
          <a
            href="https://github.com/nedaashkan/weather-app-react"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link social-media-links"
          >
            GitHub
          </a>
          , hosted on
          <a
            href="https://admirable-fox-42f161.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="netlify-link social-media-links"
          >
            Netlify
          </a>
        </div>
      </div>
    </span>
  );
}
