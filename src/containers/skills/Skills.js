import React, {useRef, useCallback, useContext} from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {illustration, skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import Lottie from "lottie-react";
import codingPerson from "../../assets/lottie/codingPerson";
import StyleContext from "../../contexts/StyleContext";

// Animation segments (frame ranges)
const SLEEP_SEGMENT = [0, 210]; // Normal sleeping loop
const JUMP_SEGMENT = [210, 330]; // Jump surprise animation

export default function Skills() {
  const {isDark} = useContext(StyleContext);
  const lottieRef = useRef(null);
  const isJumpingRef = useRef(false);

  const handleCatClick = useCallback(() => {
    const anim = lottieRef.current;
    if (!anim || isJumpingRef.current) return;

    isJumpingRef.current = true;

    // Play the jump segment once
    anim.playSegments(JUMP_SEGMENT, true);

    const animationInstance = anim.animationItem;
    if (animationInstance) {
      // When the jump finishes, go back to looping the sleep segment
      const onComplete = () => {
        isJumpingRef.current = false;
        animationInstance.removeEventListener("complete", onComplete);
        // Go back to looping the sleep animation
        anim.playSegments(SLEEP_SEGMENT, true);
      };
      animationInstance.addEventListener("complete", onComplete);
    } else {
      // Fallback if animationItem isn't ready
      setTimeout(() => {
        isJumpingRef.current = false;
        anim.playSegments(SLEEP_SEGMENT, true);
      }, 2000); // 2000ms = 120 frames at 60fps
    }
  }, []);

  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="skills-main-div">
        <Fade left duration={1000}>
          <div className="skills-image-div">
            {illustration.animated ? (
              <div className="skills-image-container">
                <Lottie
                  lottieRef={lottieRef}
                  animationData={codingPerson}
                  loop={true}
                  autoplay={true}
                  initialSegment={SLEEP_SEGMENT}
                />
                <div
                  className="cat-click-overlay"
                  onClick={handleCatClick}
                  title="Click the cat!"
                ></div>
              </div>
            ) : (
              <img
                alt="Man Working"
                src={require("../../assets/images/developerActivity.svg")}
              ></img>
            )}
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="skills-text-div">
            <h1
              className={isDark ? "dark-mode skills-heading" : "skills-heading"}
            >
              {skillsSection.title}{" "}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-text-subtitle"
                  : "subTitle skills-text-subtitle"
              }
            >
              {skillsSection.subTitle}
            </p>
            <SoftwareSkill />
            <div>
              {skillsSection.skills.map((skills, i) => {
                return (
                  <p
                    key={i}
                    className={
                      isDark
                        ? "dark-mode subTitle skills-text"
                        : "subTitle skills-text"
                    }
                  >
                    {skills}
                  </p>
                );
              })}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
