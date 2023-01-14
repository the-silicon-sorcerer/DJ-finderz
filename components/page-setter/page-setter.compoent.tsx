'use client'

import { PageContext } from "@/contexts/pageContext/page.context";
import { useContext, useEffect } from "react";

const PageSetter = ({ pageName }: { pageName: string }) => {
    const { setPage } = useContext(PageContext)
    useEffect(() => {
        setPage(pageName)
    }, [])

    return (
        <>
        </>
    )
}

export default PageSetter;