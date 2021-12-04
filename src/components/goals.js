import React from "react"
import GoalData from "../data/MyGoals.json"

import bookrowSketch from "../images/bookrow-sketch.png"
import { StaticImage } from "gatsby-plugin-image"


import { FaMicroscope } from "@react-icons/all-files/fa/FaMicroscope";
import { AiFillCheckCircle } from "@react-icons/all-files/ai/AiFillCheckCircle";
import { ImBubbles2 } from "@react-icons/all-files/im/ImBubbles2";
import { BiCool } from "@react-icons/all-files/bi/BiCool";

export function Dino() {
    return (
      <StaticImage
        src="../images/bookrow-sketch.png"
        alt="A dinosaur"
        placeholder="blurred"
        layout="fixed"
        width={200}
        height={200}
      />
    )
  }


const goals = {
    1: ImBubbles2,
    2: FaMicroscope,
    3: AiFillCheckCircle,
    4: BiCool,
}

const GoalIcon = ({iconName}) => {
    const Icon = goals[iconName];
    return <Icon />
  }

const GoalsHtml = () => (
    GoalData.goals.map((data, i) => {
        return (
            <div key={i} className="goal-card-container">

                <div className="goal-card-title">
                    <h2> {data.goal_title} </h2>
                </div>

                <div className="goal-card-icon">
                    <GoalIcon iconName={data.goal_num}/>
                </div>
                
                <div className="goal-card-content">
                    <p>{data.goal_description}</p>
                </div>

                <div className="goal-card-footer">
                    <StaticImage
                    src="../images/bookrow-sketch.png"
                    alt="A dinosaur"
                    placeholder="blurred"
                    height={25}
                />
                </div>


                
            </div>
        )
    }
    )
)

export default GoalsHtml