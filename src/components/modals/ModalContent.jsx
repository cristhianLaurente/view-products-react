import React from 'react'



const ModalContent = (props) => {
    return (
        <div className="Modal">
        <div className="ModalContent" style={{ maxWidth: `${props.size}px` }}  >
            {props.children}
            <button className='ModalContent-close' 
                onClick={props.closeModal}
            />
        </div>
        </div>
    )
}

export default ModalContent;
