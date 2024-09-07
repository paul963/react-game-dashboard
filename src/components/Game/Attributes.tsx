import { ReactNode } from 'react'

interface Props {
  term: string;
  children: ReactNode | ReactNode[];
}

const Attributes = ({ term, children }: Props) => {
  return (
    <div className="attribute-item py-3 d-flex align-items-center gap-2">
      <h5 className="mb-0">{term}:</h5>
      <div className="d-flex gap-3">{children}</div>
    </div>
  )
}

export default Attributes