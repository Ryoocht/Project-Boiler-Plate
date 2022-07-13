import React from 'react'
import { LoadingProps } from '../../types/propTypes'

const MyLoading:React.FC<LoadingProps> = ({ type, shape, color }) => {
    return (
        <div>
            {// ----- spinner -----
            shape === 'spinner' &&
            <div>
                <hr/><hr/><hr/><hr/>
            </div>
            }

            {// ----- circle -----
            shape === 'circle' &&
            <div>
                
            </div>
            }

            {// ----- pips -----
            shape === 'pips' &&
            <div>
                
            </div>
            }
        </div>
    )
}

export default MyLoading