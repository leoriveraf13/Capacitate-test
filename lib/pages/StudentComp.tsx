import React, { ReactElement, useEffect, useState } from 'react'
import 'react-circular-progressbar/dist/styles.css';

import { getData } from '../functions/ApiFunctions'
import studentData from '../obj/studentDataType'
import StudentInfo from '../components/pageComp/StudentInfo';
import CourseInfo from '../components/pageComp/CourseInfo';

const StudentComp = () : ReactElement => {
    const [items, setItems] = useState<studentData>()
    const [error, setError] = useState(false)

    const getItems = async () => {
        var res: studentData | undefined
        try {
            await getData()
            .then((data) => res = data)
            .then(() => setItems(res))
        } catch (error) {
            setError(true)
            console.error('Error obtaining data', error)
        }
    }

    useEffect(() => {
        getItems()
    }, [])
    
    return (
        <div className='student-body'>
            {items ? (
                <div>
                    <StudentInfo
                        email={items.email}
                        people={items.people}
                    />
                    <CourseInfo 
                        items={items}
                    />
                </div>
            ) : !!error ? (
                <h1 className='error'>
                    Ocurrió un error al intentar obtener sus datos. <br />
                    Favor de contactar con el administrador
                </h1>
            ) : (
                <h1>No se encontraron registros</h1>
            )}
        </div>
    )
}

export default StudentComp