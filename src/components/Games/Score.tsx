import React from 'react'

interface Props {
  score: number;
}

const Score = ({score}: Props) => {
  let badgeBg = score > 80 ? 'success' : score > 60 ? 'warning' : 'danger';

  return (
    <span className={`badge rounded text-bg-${badgeBg} px-2 fs-6 fw-normal`}>{score}</span>
  )
}

export default Score