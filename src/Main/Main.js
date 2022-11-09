import React from "react";
import "./Main.css";
const PUBLIC_URL = process.env.PUBLIC_URL;

function Main() {
  return (
    <div class="wrapper">
      <div class="box box0">
        <div class="left-panel">
          <img src={PUBLIC_URL + "/img/profile.jpg"} />
          <h2>Sirawit Mahanin</h2>
          <ui>
            <a href="#about">
              <li>About</li>
            </a>
            <a href="#skills">
              <li>Skills</li>
            </a>
            <a href="#projects">
              <li>Projects</li>
            </a>
            <a href="#experience">
              <li>Experience</li>
            </a>
            <a href="#interests">
              <li>Interests</li>
            </a>
          </ui>
          <h3>Contact</h3>
          <div className="contact">
            <p>
              <a href="mailto:sirawit.mn@gmail.com">sirawit.mn@gmail.com</a>
            </p>
            <p>
              <i class="fab fa-github" style={{ fontSize: "20px" }}></i>
              <a href="https://github.com/manooi"> - GitHub</a>
            </p>
            <p>
              <i class="fab fa-kaggle" style={{ fontSize: "27px" }}></i>
              <a href="https://www.kaggle.com/manooi"> - Kaggle</a>
            </p>
            <p>
              <i class="fab fa-linkedin" style={{ fontSize: "20px" }}></i>
              <a href="https://www.linkedin.com/in/sirawit-mahanin-b3a42614a/">
                {" "}
                - LinkedIn
              </a>
            </p>
          </div>
          <h3>Current Project</h3>
          <div>
            <p><a href="https://คะแนน.com">คะแนน.com</a></p>
          </div>
        </div>
      </div>
      <div class="box box1">
        {/* Overview - box1 */}
        <img src={PUBLIC_URL + "/img/lanternbw.jpg"} />
        <h1>Welcome to my home page!</h1>
        <h3>
          Once a civil engineer. Now Analyst at{" "}
          <a href="https://www.itone.co.th/">IT One </a>. 😎
        </h3>
        {/* <h2>
          I was a cost engineer with 3 years’ experience in construction cost
          estimating and quantity surveying.
        </h2>
        <h2>
          Very eager to learn new things that will help me develop my new career
          in technology.
        </h2> */}
      </div>
      <div class="box box2" id="about">
        <h2>About</h2>
        <ui>
          <li>28 year-old Thai</li>
          <li>
            M.S. (Computer Science and Information Systems) – NIDA | 2019 – 2023
            (Anticipated)
          </li>
          <li>
            B.Eng. (Civil Engineering) – Chulalongkorn University | 2013 – 2017
          </li>
        </ui>
      </div>
      <div class="box box3" id="skills">
        <h2>Skills</h2>
        <h3>Dev / Programing</h3>
        <ul>
          <li>Python, C#, Javascript, Typescript.</li>
          <li> Web development with Angular.</li>
          <li>.NET Core., Node.js.</li>
          <li>
            Check out <a href="#projects">Projects</a> section.{" "}
          </li>
        </ul>
        <h3>Cloud computing / DevOps</h3>
        <ul>
          <li>AWS Academy Cloud Foundation certificate.</li>
          <li>Comfortable with Linux/Unix, Git.</li>
        </ul>
        <h3>Machine Learning, Image Analytics, and Deep Learning</h3>
        <ul>
          <li>
            Trained, developed, and deployed various machine learning models.
          </li>
          <ul>
            <li>
              Linear and logistic regression, KNN, K-Means, Decision Tree, NN,
              SVM, and PCA.
            </li>
            <li>
              Comfortable with library such as scikit-learn, NumPy, pandas, and
              matplotlib.
            </li>
          </ul>
          <li>Deep Learning / Image Analytics</li>
          <ul>
            <li>Trained deep learning models such as CNN, RNN, and GANs.</li>
            <li>Hands-on experience in PyTorch and TensorFlow.</li>
            <li>Thief detection project with object detector model.</li>
          </ul>
        </ul>
      </div>
      <div class="box box4" id="experience">
        <h2>Professional Experience</h2>
        <ul>
          <div>
            <h3>
              <li style={{ float: "left" }}>IT One CO., LTD. ✅</li>
            </h3>
            <h4>
              <li
                style={{
                  float: "right",
                  marginRight: "30px",
                  listStyle: "none",
                }}
              >
                Oct 2021 - Present
              </li>
            </h4>
          </div>
          <h4 style={{ clear: "left", color: "#404040" }}>
            Adv App/Cloud Supp & Eng Analyst
          </h4>
          <ul>
            <li>IT One TS Team.</li>
            <li>Past projects:-</li>
            <ul>
              <li>
                Developed and deployed AWS{" "}
                <a href="https://aws.amazon.com/lambda/">lambda</a> for{" "}
                <a href="https://aws.amazon.com/blogs/security/how-to-rotate-access-keys-for-iam-users/">
                  access key rotation.
                </a>
              </li>
              <li>
                Setting up{" "}
                <a href="https://aws.amazon.com/ec2/?ec2-whats-new.sort-by=item.additionalFields.postDateTime&ec2-whats-new.sort-order=desc">
                  EC2
                </a>{" "}
                instance with predefined terraform scripts. Hardening and
                software installation.
              </li>
              <li>
                Developed angular front-end billing page for{" "}
                <a href="https://aws.amazon.com/api-gateway/">
                  AWS API Gateway
                </a>
                usage
                <ul>
                  <li>
                    Reactive approach with <a href="https://rxjs.dev/">rxjs</a>.
                  </li>
                </ul>
              </li>
            </ul>
          </ul>
        </ul>
        <ul>
          <div>
            <h3>
              <li style={{ float: "left" }}>WAL CONSULTANT CO., LTD.</li>
            </h3>
            <h4>
              <li
                style={{
                  float: "right",
                  marginRight: "30px",
                  listStyle: "none",
                }}
              >
                Aug 2018 - May 2021 (2ys 10mos)
              </li>
            </h4>
          </div>
          <h4 style={{ clear: "left", color: "#404040" }}>Cost Engineer</h4>
          <ul>
            <li>
              Handled works such as pre-qualification, tender administration,
              pre-tender estimate, tender reports, tender comparison, interview,
              negotiation.
            </li>
            <li>
              Handled post-contract works such as progress claims, variation
              works and final account.
            </li>
            <li>
              Construction cost estimation includes structural, architectural,
              external, landscape and interior works.
            </li>
            <li>Hands-on experience in costX (cost estimation software).</li>
            <li>Worksheet automation using VBA.</li>
          </ul>
        </ul>
        <ul>
          <div>
            <h3>
              <li style={{ float: "left" }}>AECOM COST CONSULTING CO., LTD.</li>
            </h3>
            <h4>
              <li
                style={{
                  float: "right",
                  marginRight: "30px",
                  listStyle: "none",
                }}
              >
                Oct 2017 - June 2018 (9mos)
              </li>
            </h4>
          </div>
          <h4 style={{ clear: "left", color: "#404040" }}>Cost Engineer</h4>
        </ul>
      </div>

      <div class="box box5" id="projects">
        <h2>Projects</h2>
        <p>This section lists all my coding projects.</p>
        <ul>
          <li>I'm working on a project called 'Kanan'.</li>
          <li>
            <a style={{ color: "blue" }} href="https://github.com/manooi/jibby">
              Jibby
            </a>{" "}
            - web app for parcel delivery service. Built with MERN stack.{" "}
            <em>
              (part of my demo project presented in job interview @true-e
              logistics)
            </em>
            <em> (the backend doesn't work anymore. I moved the frontend to cloudflare pages)</em>
          </li>
          <li>
            <a
              style={{ color: "blue" }}
              href="https://github.com/manooi/moviesDB"
            >
              movieDB
            </a>{" "}
            - web app for movie records. Built with Express + MongoDB and
            template engine ejs. <em>(part of technical exam @sitron)</em>
          </li>
          <li>
            <a
              style={{ color: "blue" }}
              href="https://github.com/manooi/thaihouse-gen"
            >
              thaihouse-gen
            </a>{" "}
            - Thai house image generator using DCGANs.
            <em> (part of Deep Learning term project)</em>
          </li>
        </ul>
      </div>

      <div class="box box6" id="interests">
        <h2>Interests</h2>
        <ul>
          <li>Vim - the ubiquitous text editor. I have been using Vim for 2 years.</li>
          <li>Photography</li>
          <li>Electronics - Arduino/Rasberry Pi</li>
          <li>Video games</li>
          <li>Sports</li>
        </ul>
      </div>
    </div>
  );
}

export default Main;
