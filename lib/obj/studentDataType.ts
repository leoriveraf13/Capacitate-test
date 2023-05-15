export type studentData = {
    email: string,
    inscriptions: Array<{
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
    }>,
    people: Array <{
        lastName: string,
        name: string
    }>
}

export default studentData