import React from 'react'
import '../styles/TeacherList.css'

const classList = [
  {
    class: 'SF222',
    tuition: '3,000 baht',
    credit: '3 credits',
  },
  {
    class: 'CH171',
    tuition: '3,000 baht',
    credit: '3 credits',
  },
  {
    class: 'CN311',
    tuition: '3,000 baht',
    credit: '3 credits',
  },
  {
    class: 'SF231',
    tuition: '3,000 baht',
    credit: '3 credits',
  },
  {
    class: 'SF221',
    tuition: '3,000 baht',
    credit: '3 credits',
  },
  {
    class: 'CN321',
    tuition: '3,000 baht',
    credit: '3 credits',
  },
]

const teacherList = () => {
  return (
    <div>
        <div className="list--container">
          <div className="buttonlay"></div>
          {classList.map((classList) =>(
          <div className="list">
            <div className="teacher--detail">
              <h3 className='bar'>{classList.class}</h3>
              <span className='bar'>{classList.tuition}</span>
              <span className='bar'>{classList.credit}</span>
            </div>
          </div>
          ))}
        </div>

        <div className="buttonlay"></div>
        <div className="buttonflex2">
          <button>Pay</button>
          <button className='bill'>Show bill</button>
        </div>
    </div>
  )
}

export default teacherList