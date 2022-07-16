import React from 'react'
import { LoadingProps } from '../../types/propTypes'

const MyLoading:React.FC<LoadingProps> = ({ type, shape, color }) => {
    return (
        <div className='relative'>
            {// ----- spinner -----
            shape === 'spinner' &&
            <div className='loading-spinner'>
                <hr className='bg-red-400'/>
                <hr className='bg-yellow-400'/>
                <hr className='bg-blue-400'/>
                <hr className='bg-purple-400'/>
            </div>
            }

            {// ----- circle -----
            shape === 'circle' &&
            <div>
                {/* normal circle loading */}
            </div>
            }

            {// ----- pips -----
            shape === 'pips' &&
            <div>
                {/* 3 or more vertical lines */}
            </div>
            }

            {// ----- pips -----
            shape === 'bar' &&
            <div>
                {/* logo + bar */}
            </div>
            }
        </div>
    )
}

export default MyLoading