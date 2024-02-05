import React from 'react'
import { ArraysRender } from '../ArraysRender/ArraysRender'
import { ObjectsRender } from '../ObjectsRender/ObjectsRender'
import { PrimitivesRender } from '../PrimitivesRender/PrimitivesRender'

export const JsonRender: React.FC<{ data: unknown }> = ({ data }) => {
  if (Array.isArray(data)) {
    return <ArraysRender data={data} />
  } else if (typeof data === 'object' && data !== null) {
    return <ObjectsRender data={data as Record<string, unknown>} />
  } else {
    return <PrimitivesRender data={data} />
  }
}

