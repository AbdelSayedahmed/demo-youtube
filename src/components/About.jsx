import "./About.css";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="about-container">
      <h1>About me</h1>
      <img src="https://ca.slack-edge.com/TCVA3PF24-U064KLDFYKB-1e41f20ca5e6-512" />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem
        accusamus culpa officia eum soluta unde. Odit cupiditate sunt asperiores
        accusantium, quisquam blanditiis enim voluptate illo velit magni
        molestiae molestias neque! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Exercitationem excepturi, molestiae facilis laboriosam
        ipsam quaerat voluptatibus est porro minima, vero aspernatur repudiandae
        autem. Reiciendis est nostrum deleniti dignissimos quae nobis.
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
