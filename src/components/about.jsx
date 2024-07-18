import React from "react";
import myImage from "../img/myImage.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "unity_skill", content: "Unity", porcentage: "100%", value: "100" },
        { id: "csharp_skill", content: "C#", porcentage: "100%", value: "100" },
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          porcentage: "100%",
          value: "100"
        },
        { id: "UI/UX_skill", content: "UI/UX", porcentage: "90%", value: "90" },
        {
          id: "GameAI_skill",
          content: "Game AI",
          porcentage: "90%",
          value: "90"
        },
        {
          id: "blockchain_skill",
          content: "Blockchain",
          porcentage: "90%",
          value: "90"
        },
        {
          id: "smartContract_skill",
          content: "Smart Contract",
          porcentage: "90%",
          value: "90"
        },
        {
          id: "leveldesign_skill",
          content: "Level Design",
          porcentage: "80%",
          value: "80"
        }
      ],
      about_me: [
        {
          id: "first-p-about",
          content: "Passionate and creative Blockchain Unity Developer with a strong foundation in game development, blockchain tech, seeking an opportunity to leverage my skills in Unity, C#, and game design to contribute to innovative projects. Eager to collaborate with a dynamic team to create immersive and engaging gaming experiences."
        },
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
