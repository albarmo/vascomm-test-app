import React, { useState } from 'react'

const useModalDisclosure = () => {
    const [data, setData] = useState<any | null>(null)
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const open = (meta: any) => {
        setIsOpen(true)
        setData(meta)
    }
    const close = () => {
        setIsOpen(false)
        setData(null)
    }

    return { isOpen, open, close, data }

}

export default useModalDisclosure