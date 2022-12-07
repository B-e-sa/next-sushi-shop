import { useState, useEffect } from "react"

const useIsMobile = () => {

    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        if (navigator.userAgent.mobile)
            setIsMobile(true)
        setIsMobile(false)
    }, [])

    return isMobile

}

export default useIsMobile