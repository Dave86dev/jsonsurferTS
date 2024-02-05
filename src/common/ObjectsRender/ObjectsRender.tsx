import React from 'react'
import { JsonRender } from '../JsonRender/JsonRender'

import { ObjectComponentProps } from '../../interfaces'

export const ObjectsRender: React.FC<ObjectComponentProps> = ({ data }) => {
  return (
    <div>
      {Object.entries(data).map(([key, value]) => (
        <div key={key}>
          <strong>{key}:</strong> <JsonRender data={value} />
        </div>
      ))}
    </div>
  )
}
