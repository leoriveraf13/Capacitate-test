import Axios from 'axios'
import studentData from '../obj/studentDataType'

export const getData = async(): Promise<studentData | undefined> => {
    try {
        const { data } = await Axios.get(`https://besvc.capacitateparaelempleo.org/api/inscriptions/TestReport`)
        return data
    } catch(error) {
        console.error('Error obtaining data', error)
    }
    return undefined
}