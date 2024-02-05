import React from 'react'
import { JsonRender } from '../JsonRender/JsonRender'

export const ObjectsRender: React.FC<{ data: Record<string, unknown> }> = ({ data }) => {
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
