
export interface JsonRenderProps {
    data: unknown
    depth: number
}

export interface ArrayComponentProps {
    data: unknown[]
    depth: number
}

export interface ObjectComponentProps {
    data: { [key: string]: unknown } 
    depth: number
}

export interface PrimitivesComponentProps {
    data: unknown
}

export interface Value {
    key: string
    value: string
  }