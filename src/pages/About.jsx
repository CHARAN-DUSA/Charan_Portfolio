import { useEffect } from "react";
import { fadeLeft, fadeRight, waitForGSAP } from "../utils/motion";
import profileImg from "../assets/Profile.png";
import "./About.css";

const pills = [
  "ASP.NET Core",
  "Angular",
  "SQL Server",
  "Docker",
  "SignalR",
  "Redis",
  "Clean Arch",
  "EF Core",
];
export default function About() {
  useEffect(() => {
    waitForGSAP(() => {
      fadeLeft(".about-text", ".about", {
        x: -80,
        duration: 0.9,
        start: "top 75%",
      });
      fadeRight(".about-image", ".about", { x: 80, duration: 0.9 });
    });
  }, []);
  return (
    <section className="about" id="about">
      <div className="about-text">
        <p className="about-eyebrow">— About Me</p>
        <h2 className="about-title">
          .NET Dev.
          <br />
          <span className="accent">Builder first.</span>
        </h2>
        <p className="about-body">
          I'm Charan — a Full-Stack .NET Developer and 2026 B.Tech graduate (AI
          &amp; Data Science) from Guru Nanak Institute of Technical Campus,
          Hyderabad.
          <br />
          <br />
          I build production-grade applications with ASP.NET Core 8, Angular,
          and SQL Server, applying Clean Architecture and SOLID principles so
          systems stay maintainable as they grow.
          <br />
          <br />I also hold 35+ Salesforce Trailhead badges and enjoy
          competitive programming in Python when I'm not shipping features.
        </p>
        <div className="about-skills">
          {pills.map((p) => (
            <span key={p} className="skill-pill">
              {p}
            </span>
          ))}
        </div>
        <div className="about-cta-row">
            <a className="btn-primary" href="#connect">Let's Talk <span>→</span></a>
          <a
            className="btn-outline"
            href="https://github.com/CHARAN-DUSA"
            target="_blank"
            rel="noopener"
          >
            GitHub
          </a>
          <a
            className="btn-outline"
            href="https://linkedin.com/in/charan-dusa"
            target="_blank"
            rel="noopener"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <div className="about-image">
        <div className="about-img-inner">
          <img
            src={profileImg}
            alt="Charan Dusa"
            className="about-profile-img"
          />
        </div>
        <div className="about-badge">
          2026
          <br />
          B.Tech
          <br />
          Graduate
        </div>
      </div>
    </section>
  );
}
