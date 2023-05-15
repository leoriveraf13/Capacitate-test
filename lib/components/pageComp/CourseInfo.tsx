import React, { PropsWithChildren, ReactElement, useEffect, useState } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import studentData from '../../obj/studentDataType'
import inscriptions from '../../obj/inscriptionsType'
import CourseModal from './CourseModal';

const filterCourses = (courses: inscriptions) => {
    return courses.filter((course) => course.advance !== 0)
}

type CourseInfoProps = {
    items: studentData
}

const CourseInfo = ({items}: PropsWithChildren<CourseInfoProps>) : ReactElement => {
    const [courses, setCourses] = useState<inscriptions | undefined>()
    const [course, setCourse] = useState<any>()
    const [show, setShow] = useState(false)

    const changeItem = (data: any) => {
        console.log(data)
        setCourse(data)
        setShow(true)
    }

    useEffect(() => {
        setCourses(items ? filterCourses(items?.inscriptions) : undefined)
    }, [])
    
    return (
        <div>
            {
            <div className='student-courses'>
                {courses?.map((data, idx) => (
                    <div key={`div ${data.courseId}`}>
                        <div key={`div-container ${data.courseId}`} className='container'>
                            <div 
                            className={`item image-container ${data.courseId}`} 
                            key={`image-container ${data.courseId}`} 
                            style={{ backgroundColor: data.course.sector.colorTheme}}>
                                <img className='image' key={`image ${data.courseId}`} src={data.course.imageUrl}></img>
                            </div>
                            <div className={`item course-name ${data.courseId}`} key={`name ${data.courseId}`}>{data.course.name}</div>
                            <div className={`item advance-container ${data.courseId}`} key={`advance-container ${data.courseId}`}>
                                <CircularProgressbar
                                    value={data.advance}
                                    text={`${data.advance}%`}
                                    key={`advance ${data.courseId}`}
                                />
                            </div>
                            <button className={`item button-info ${data.courseId}`} key={`button ${data.courseId}`} onClick={()=> changeItem(data)}>
                                Detalles
                            </button>
                        </div>
                        {
                            idx !== courses.length - 1 &&
                                (<hr className={`h-bar ${data.courseId}`} key={`h-bar ${data.courseId}`} />)
                        }
                    </div>
                ))}
                <CourseModal
                    item={course}
                    show={show}
                    setShow={setShow}
                />
            </div>
            }
        </div>
    )
}

export default CourseInfo