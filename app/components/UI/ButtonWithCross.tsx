import React from 'react'
import { IoMdCloseCircleOutline } from 'react-icons/io'

const ButtonWithCross = ({onClick,name}) => {
    return (
        <>
            <button className="px-4 py-2 bg-blue-500 text-white rounded flex justify-center gap-1 items-center" onClick={onClick}>{name} <IoMdCloseCircleOutline />
            </button>
        </>
    )
}

export default ButtonWithCross
