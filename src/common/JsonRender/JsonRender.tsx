import React from 'react'
import { ArraysRender } from '../ArraysRender/ArraysRender'
import { ObjectsRender } from '../ObjectsRender/ObjectsRender'
import { PrimitivesRender } from '../PrimitivesRender/PrimitivesRender'

import { JsonRenderProps } from '../../interfaces'

export const JsonRender: React.FC<JsonRenderProps> = ({ data, depth, actualRoute }) => {
  if (Array.isArray(data)) {
    return <ArraysRender data={data} depth={depth} actualRoute={actualRoute}/>
  } else if (typeof data === 'object' && data !== null) {
    return <ObjectsRender data={data as Record<string, unknown>} depth={depth} actualRoute={actualRoute}/>
  } else {
    return <PrimitivesRender data={data} />
  }
}

