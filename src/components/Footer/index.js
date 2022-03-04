import React from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrow,
  faEnvelope,
  faLocationDot,
  faMapPin,
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer(props) {
  return (
    <>
      <div className="footer-container">
        <div className="footer-left">
          <span style={{ display: "flex", justifyContent: "center" }}>
            <h1
              style={{
                color: "lime",
                padding: "5px",
                fontWeight: "lighter",
                paddingBottom: 20,
              }}
            >
              Android Club Vit®
            </h1>
          </span>
          <h4
            style={{ padding: "10px", color: "white", fontWeight: "lighter" }}
          >
            Android club is for developers who are interested in androids
            developer technology; everything from the Android, Chrome, Drive,
            and Google Cloud platforms, to product APIs like the Cast API, Maps
            API, and YouTube API are being used by the students to build apps. A
            club can take many forms from just a few people getting together, to
            large gatherings with demos and tech talks, to events like code
            sprints and hack-a-thon’s. However, at core, android club focuses on
            development of technical content
          </h4>

          <div
            className="isVisible"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              paddingLeft: 30,
              paddingTop: 50,
              backgroundColor: "black",
            }}
          >
            <FontAwesomeIcon icon={faLocationDot} color={"lime"} size="2xl" />
            <h4
              style={{ marginLeft: 15, color: "white", fontWeight: "lighter" }}
            >
              Find Us: Vellore Institute of Technology, Chennai{" "}
            </h4>
          </div>
          <div
            className="isVisible"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              marginTop: 20,
              paddingLeft: 30,
              backgroundColor: "black",
            }}
          >
            {" "}
            <FontAwesomeIcon icon={faEnvelope} color={"lime"} size="2xl" />
            <h4
              style={{ marginLeft: 15, color: "white", fontWeight: "lighter" }}
            >
              Mail Us at: androidclub@vit.ac.in{" "}
            </h4>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",

              paddingTop: 20,
              justifyContent: "space-between",
              width: "30%",
              marginLeft: 30,
              backgroundColor: "black",
            }}
          >
            <FontAwesomeIcon
              icon={faInstagram}
              size="2xl"
              color={"lime"}
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "https://www.instagram.com/androidvitc";
              }}
            />
            <FontAwesomeIcon
              icon={faLinkedin}
              size="2xl"
              color={"lime"}
              onClick={(e) => {
                e.preventDefault();
                window.location.href =
                  "https://www.linkedin.com/company/android-club-vitc/mycompany/";
              }}
            />
          </div>
        </div>

        <div className="footer-right">
          <span style={{ display: "flex", justifyContent: "center" }}>
            <h1
              style={{
                color: "lime",
                padding: "5px",
                fontWeight: "lighter",
                paddingBottom: 20,
              }}
            >
              Linux Club Vit®
            </h1>
          </span>
          <h4
            style={{ padding: "10px", color: "white", fontWeight: "lighter" }}
          >
            The 'Linux Club' of VIT, Chennai was created to Spread the awareness
            of Free and Open Source Software (FOSS) through Linux flavours. It
            believes in developing collaborative open-source projects. It
            encourages users to understand the systems and softwares they use on
            a fundamental level. Which can be achieved only using
            non-proprietary tools. It aims to get member to contribute to FOSS,
            make them more industry ready and to promote GNU/Linux in General.
          </h4>

          <div
            className="isVisible"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              paddingLeft: 30,
              paddingTop: 50,
              backgroundColor: "black",
            }}
          >
            <FontAwesomeIcon icon={faLocationDot} color={"lime"} size="2xl" />
            <h4
              style={{ marginLeft: 15, color: "white", fontWeight: "lighter" }}
            >
              Find Us: Vellore Institute of Technology, Chennai{" "}
            </h4>
          </div>
          <div
            className="isVisible"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              marginTop: 20,
              paddingLeft: 30,
              backgroundColor: "black",
            }}
          >
            {" "}
            <FontAwesomeIcon icon={faEnvelope} color={"lime"} size="2xl" />
            <h4
              style={{ marginLeft: 15, color: "white", fontWeight: "lighter" }}
            >
              Mail Us at: lug.vitc@gmail.com{" "}
            </h4>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",

              paddingTop: 20,
              justifyContent: "space-between",
              width: "30%",
              marginLeft: 30,
              backgroundColor: "black",
            }}
          >
            {/* <span> */}
            <FontAwesomeIcon
              icon={faInstagram}
              color={"lime"}
              size="2xl"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "https://www.instagram.com/lugvitc/";
              }}
            />
            <FontAwesomeIcon
              icon={faLinkedin}
              color={"lime"}
              size="2xl"
              onClick={(e) => {
                e.preventDefault();
                window.location.href =
                  "https://www.linkedin.com/company/lugvitc/";
              }}
            />
          </div>
        </div>
        <div className="invisible-container">
          <span
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {" "}
            <FontAwesomeIcon
              icon={faLocationDot}
              color={"lime"}
              size="xl"
              style={{ padding: 5 }}
            />
            <h6 style={{ color: "white" }}>
              {" "}
              Find Us: Vellore Institute of Technology, Chennai{" "}
            </h6>
          </span>
          <span
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {" "}
            <FontAwesomeIcon
              icon={faEnvelope}
              color={"lime"}
              size="xl"
              style={{ padding: 5 }}
            />
            <h6 style={{ color: "white" }}>
              Mail Android Club at: androidclub@vit.ac.in{" "}
            </h6>
          </span>
          <span
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {" "}
            <FontAwesomeIcon
              icon={faEnvelope}
              color={"lime"}
              size="xl"
              style={{ padding: 5 }}
            />
            <h6 style={{ color: "white" }}>
              Mail Linux Club at: lug.vitc@gmail.com{" "}
            </h6>
          </span>
        </div>
        <span
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            padding: 25,
          }}
        >
          <h1 style={{ color: "white", fontWeight: "lighter" }}>© 2022</h1>{" "}
        </span>
      </div>
    </>
  );
}
