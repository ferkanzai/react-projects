import { Fragment } from "react";

export default function Skills() {

  const skillList = [
    'JavaScript',
    'React',
    'NodeJS',
    'Python',
    'AWS',
    'HTML',
    'CSS',
    'Bitrise'
  ]

  return (
    <Fragment>
      <h3>SKILLS</h3>
      <hr />
      <div id='skills-list'>
        {skillList.map((skill, index) => <span className='skill' key={index}>{skill}</span>)}
      </div>
    </Fragment>
  )
}