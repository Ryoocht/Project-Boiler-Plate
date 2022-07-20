import classes from '../../assets/styles/loading.module.css'
import { LoadingProps } from '../../types/propTypes'
import { RFC } from '../../types/reactTypes'

const MyLoading:RFC<LoadingProps> = ({ type, shape, color }) => {
    return (
        <div className='relative'>
            {// ----- circle ----- //
            shape === 'circle' &&
            <svg className={classes.loading_circle} viewBox="25 25 50 50">
                <circle cx="50" cy="50" r="20"></circle>
            </svg>
            }

            {// ----- bars ----- //
            shape === 'bars' &&
            <div className={classes.vertical_loading_bars}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            }

            {// ----- cradle ----- //
            shape === 'cradle' &&
            <div className={classes.loading_cradle}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            }

            {// ----- dots ----- //
            shape === 'dots' &&
            <div className={classes.loading_dots}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            }

            {// ----- spinner ----- //
            shape === 'spinner' &&
            <div className={classes.loading_spinner}>
                <hr/><hr/><hr/><hr/>
            </div>
            }

            {// ----- wave ----- //
            shape === 'wave' &&
            <div className={classes.loading_wave}>
                <div className={classes.wave_bars}></div>
                <div className={classes.wave_bars}></div>
                <div className={classes.wave_bars}></div>
                <div className={classes.wave_bars}></div>
                <div className={classes.wave_bars}></div>
                <div className={classes.wave_bars}></div>
            </div>
            }
        </div>
    )
}

export default MyLoading