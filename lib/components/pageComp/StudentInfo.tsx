import React, { PropsWithChildren, ReactElement } from 'react'

type StudentInfoProps = {
    email: string,
    people: {
        name: string,
        lastName: string
    }[]
}

const StudentInfo = ({email, people}: PropsWithChildren<StudentInfoProps>) : ReactElement => {
    return (
        <div className='student-info'>
            <p>
                <a className='email-label'>{email}</a>
            </p>
            <div>
                <h1 className='name-label'>{people[0].name + " " + people[0].lastName}</h1>
            </div>
            
        </div>
    )
}

export default StudentInfo