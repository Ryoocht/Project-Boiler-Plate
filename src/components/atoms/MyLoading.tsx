import React from 'react'
import '../../assets/styles/loading.css'
import { LoadingProps } from '../../types/propTypes'
import { RFC } from '../../types/reactTypes'

const MyLoading:RFC<LoadingProps> = ({ type, shape, color }) => {
    return (
        <div className='relative'>
            {// ----- spinner -----
            shape === 'spinner' &&
            <div className='relative w-screen h-screen'>
                <div className='loading_spinner'>
                    <hr/><hr/><hr/><hr/>
                </div>
            </div>
            }

            {// ----- circle -----
            shape === 'circle' &&
            <div className='relative h-full'>
                <div className='main_circle'>
                    <div className='circle_loader'>
                        <svg className='circular_loader' viewBox="25 25 50 50" >
                        <circle className='circular_loader_path' cx="50" cy="50" r="20" fill="none" stroke="#70c542" stroke-width="2" />
                        </svg>
                    </div>
                </div>
            </div>
            }

            {// ----- pips -----
            shape === 'pips' &&
            <div className='relative'>
                <div className='flex items-center'>
                    <span className='pip_bar'></span>
                    <span className='pip_bar'></span>
                    <span className='pip_bar'></span>
                </div>
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