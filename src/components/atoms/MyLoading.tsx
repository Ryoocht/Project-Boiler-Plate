import React from 'react'
import { LoadingProps } from '../../types/propTypes'

const MyLoading:React.FC<LoadingProps> = ({ type, shape, color }) => {
    return (
        <div>
            {// ----- spinner -----
            shape === 'spinner' &&
            <div className=''>
                <hr/><hr/><hr/><hr/>
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