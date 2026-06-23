import React, {useState, createRef, useContext} from "react";
import {Fade, Slide} from "react-reveal";
import "./ExperienceCard.scss";
import StyleContext from "../../contexts/StyleContext";
import DisplayLottie from "../displayLottie/DisplayLottie";
import lionRoar from "../../assets/lottie/lionRoar.json";

export default function ExperienceCard({cardInfo}) {
  const [isRoaring, setIsRoaring] = useState(false);
  const imgRef = createRef();

  const handleRoar = () => {
    if (cardInfo.company === "Philip Morris International") {
      setIsRoaring(true);
      setTimeout(() => setIsRoaring(false), 1500);
    }
  };

  const GetDescBullets = ({descBullets}) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li key={i} className="subTitle">
            {item}
          </li>
        ))
      : null;
  };

  const {isDark} = useContext(StyleContext);

  return (
    <div>
      <Fade left duration={1000}>
        <div className="experience-card">
          {cardInfo.companylogo && (
            <div
              className={`experience-card-left ${
                isRoaring ? "roar-animation" : ""
              }`}
              onClick={handleRoar}
              style={{
                cursor:
                  cardInfo.company === "Philip Morris International"
                    ? "pointer"
                    : "default"
              }}
            >
              <img
                crossOrigin={"anonymous"}
                ref={imgRef}
                className="experience-roundedimg"
                src={cardInfo.companylogo}
                alt={cardInfo.company}
              />
              {isRoaring && (
                <div className="lion-roar-overlay">
                  <DisplayLottie animationData={lionRoar} />
                </div>
              )}
            </div>
          )}
          <div className="experience-card-right">
            <h5 className="experience-text-company">{cardInfo.company}</h5>

            <div className="experience-text-details">
              <h5
                className={
                  isDark
                    ? "dark-mode experience-text-role"
                    : "experience-text-role"
                }
              >
                {cardInfo.role}
              </h5>
              <p
                className={`${
                  isDark ? "dark-mode" : ""
                } experience-text-duration`}
              >
                {cardInfo.date}
              </p>
              <p className="experience-text-desc">{cardInfo.desc}</p>
              <div className="experience-text-bullets">
                <ul>
                  <GetDescBullets descBullets={cardInfo.descBullets} />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Fade>
      <Slide left duration={2000}>
        <div className="experience-card-border"></div>
      </Slide>
    </div>
  );
}
