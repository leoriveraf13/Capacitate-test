import React, { PropsWithChildren, ReactElement, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { 
    Button,
    Form,
    Modal
} from 'react-bootstrap'
import { Bars } from 'react-loader-spinner'
import moment from 'moment'

import inscriptions from '../../obj/inscriptionsType'

type CourseModalProps = {  
    show: boolean
    setShow: (data: any) => void
    item: inscriptions | any
}

const CourseModal = ({ item, show, setShow }: PropsWithChildren<CourseModalProps>): ReactElement => {
    const [loading, setLoading] = useState(true)
    const { reset } = useForm<typeof item>()

    useEffect(() => {
        if (show === false){
            setLoading(true)
            reset()
        } else {
            setLoading(false)
        }    
    }, [show])
    
    return (
        <Modal show={show}>
            {loading ?(
                <div className="m-6">
                    <Bars height="80"
                        width="80"
                        color="#0798e8"
                        ariaLabel="bars-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true} />
                </div>
            ) : (
                <Form>
                    <h2>
                        <Modal.Header className='mb-4' style={{backgroundColor: item?.course.sector.colorTheme}}>
                            {item?.course.name}
                        </Modal.Header>
                    </h2>
                    <Modal.Body>
                        <div className='modal-item'>
                            <p><a>Avance: </a></p>
                            <p><a>{item?.advance + '%'}</a></p>
                        </div>
                        <div className='modal-item'>
                            <p><a>Fecha de certificación: </a></p>
                            <p><a>{ moment(item?.certificationDate).format('DD - MM - YYYY')}</a></p>
                        </div>
                        <div className='modal-item'>
                            <p><a>Sector: </a></p>
                            <p><a>{item?.course.sector.name}</a></p>
                        </div>
                    </Modal.Body>
                    <Modal.Footer style={{backgroundColor: item?.course.sector.colorTheme}}>
                        <Button
                        className='modal-button'
                        onClick={() => setShow(false)}
                        >
                            Cerrar
                        </Button>
                    </Modal.Footer>
                </Form>
            )}
        </Modal>
    )
}

export default CourseModal