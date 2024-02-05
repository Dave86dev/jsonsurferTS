import React from 'react'

import { PrimitivesComponentProps } from '../../interfaces'

export const PrimitivesRender: React.FC<PrimitivesComponentProps> = ({ data }) => {
    const content = typeof data === "string" ? `'${data}'` : String(data)
    return <span>{content}</span>
}

