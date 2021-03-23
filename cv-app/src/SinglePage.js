import './SinglePage.css'
import Picture from './Picture'
import BasicInfo from './BasicInfo'
import WorkExperience from './WorkExperience'
import Studies from './Studies'
import Skills from './Skills'
import { Fragment } from 'react'

export default function SinglePage() {
  const picture = true
  return (
    <Fragment>
      <div id='basic-info'>
        { picture ? <Picture /> : null }
        <BasicInfo />
      </div>
      <hr />
      <div id='main-content'>
        <div id='left'>
          <div id='work-experience'>
            <WorkExperience />
          </div>
        </div>
        <div id='rigth'>
          <div id='skills'>
            <Skills />
          </div>
          <div id='studies'>
            <Studies />
          </div>
        </div>
      </div>

    </Fragment>
  )
}