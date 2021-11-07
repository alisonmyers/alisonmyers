import React from "react"
import GoalData from "../data/MyGoals.json"

const GoalsHtml = () => (
    GoalData.goals.map((data, i) => {
        return (
            <div key={i}>
                <h2>#{data.goal_num} {data.goal_title}</h2>
                <p>{data.goal_description}</p>
            </div>
        )
    }
    )
)

export default GoalsHtml