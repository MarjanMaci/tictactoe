import React from 'react'
import '../x/x.styles.scss'

const Cross = () => (
    <svg width="100px" height="100px" viewBox="-50 -50 100 100">
        <line x1="-40px" y1="-40px" x2="40px" y2="40px"></line>
        <line x1="-40px" y1="40px" x2="40px" y2="-40px"></line>
    </svg>
)

export default Cross;