export type inscriptions = Array<{
    advance: number,
    anyTest: boolean,
    certificationDate: string,
    course: {
        imageUrl: string,
        name: string,
        sector: {
            colorTheme: string,
            id: number,
            name: string
        }
    },
    courseId: number,
    folioCertificate: string,
    inscripcionDate: string,
    scoreCourse: number
}>

export default inscriptions