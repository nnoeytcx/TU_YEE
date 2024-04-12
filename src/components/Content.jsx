import React from 'react'
import '../styles/content.css'
import ContentHeader from './ContentHeader'
import TeacherList from './teacherList'

const Content = () => {
  return (
    <div className='content'>
      <ContentHeader />
      <TeacherList />
    </div>
  )
}

export default Content