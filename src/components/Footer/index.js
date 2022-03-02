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
            <h1 style={{ color: "green", padding: "5px",fontWeight:'lighter',paddingBottom:20 }}>
              ANDROID CLUB VIT®
            </h1>
          </span>
          <h4 style={{ padding: "10px", color: "white",fontWeight:'lighter' }}>
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
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              paddingLeft: 30,
              paddingTop:50,
              backgroundColor: "#000d1a",
            }}
          >
            <FontAwesomeIcon icon={faLocationDot} color={"green"} size="2xl" />
            <h4 style={{ marginLeft: 15,color:'white',fontWeight:'lighter' }}>
              Find Us: Vellore Institute of Technology, Chennai{" "}
            </h4>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              marginTop: 20,
              paddingLeft: 30,
              backgroundColor: "#000d1a",
            }}
          >
            {" "}
            <FontAwesomeIcon icon={faEnvelope} color={"green"} size="2xl" />
            <h4 style={{ marginLeft: 15,color:'white',fontWeight:'lighter'  }}>
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
              backgroundColor: "#000d1a",
            }}
          >
            <FontAwesomeIcon icon={faInstagram} size="2xl" color={"green"} />
            <FontAwesomeIcon icon={faLinkedin} size="2xl"  color={"green"} />
          </div>
        </div>

        <div className="footer-right">
        <span style={{ display: "flex", justifyContent: "center" }}>
            <h1 style={{ color: "green", padding: "5px",fontWeight:'lighter',paddingBottom:20 }}>
              Linux Club Vit®
            </h1>
          </span>
          <h4 style={{ padding: "10px", color: "white",fontWeight:'lighter' }}>
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
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              paddingLeft: 30,
              paddingTop:50,
              backgroundColor: "#000d1a",
            }}
          >
            <FontAwesomeIcon icon={faLocationDot}  color={"green"}  size="2xl" />
            <h4 style={{ marginLeft: 15,color:'white',fontWeight:'lighter'  }}>
              Find Us: Vellore Institute of Technology, Chennai{" "}
            </h4>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              marginTop: 20,
              paddingLeft: 30,
              backgroundColor: "#000d1a",
            }}
          >
            {" "}
            <FontAwesomeIcon icon={faEnvelope}  color={"green"}  size="2xl" />
            <h4 style={{ marginLeft: 15,color:'white',fontWeight:'lighter'  }}>
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
              backgroundColor: "#000d1a",
            }}
          >
            <FontAwesomeIcon icon={faInstagram}  color={"green"}  size="2xl" />
            <FontAwesomeIcon icon={faLinkedin}   color={"green"}  size="2xl" />
         
        </div>
        </div>
        <div style={{width:'100%',padding:50,display:'flex',justifyContent:'center',backgroundColor:"#000d1a",color:'white'}}><h1>© 2022</h1> </div>
      </div>
    </>
  );
}
