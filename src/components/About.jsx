import "./About.css";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="about-container">
      <h1>About me</h1>
      <img src="https://ca.slack-edge.com/TCVA3PF24-U064KLDFYKB-1e41f20ca5e6-512" />
      <p>
        Hello, my name is Abdel. I am an aspiring software engineer currently
        pursuing a career in full-stack development. My passion for programming
        began in high school, and I’ve been hooked ever since. Besides coding, I
        have a strong interest in cars and computers. In my free time, I enjoy
        working on cars and building gaming rigs. I love the process of coding
        and creating new things. Additionally, I excel at debugging and finding
        quick solutions to complex problems.
      </p>
      <nav>
        <Link to={"https://github.com/AbdelSayedahmed"} target="_blank">
          Github
        </Link>
        <Link
          to={"https://www.linkedin.com/in/abdelsayedahmed/"}
          target="_blank"
        >
          LinkedIn
        </Link>
        <Link to={"https://github.com/AbdelSayedahmed"} target="_blank">
          Portfolio
        </Link>
      </nav>
    </div>
  );
}
