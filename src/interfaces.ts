
export interface JsonSearchProps {
    data: unknown
    criteria: string
}

export interface RecursiveSearchProps {
    data: unknown
    actualRoute: string
    criteria: string
}

export interface JsonRenderProps {
    data: unknown
    depth: number
    actualRoute: string
}

export interface ArrayComponentProps {
    data: unknown[]
    depth: number
    actualRoute: string
}

export interface ObjectComponentProps {
    data: { [key: string]: unknown } 
    depth: number
    actualRoute: string
}

export interface PrimitivesComponentProps {
    data: unknown
}

export interface Value {
    path: string
    value: string
  }