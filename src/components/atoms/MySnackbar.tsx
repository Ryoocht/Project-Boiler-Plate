import { useEffect } from 'react'
import classes from '../../assets/styles/snackbar.module.css'
import { RFC } from '../../types/reactTypes'
import { SnackBarProps } from '../../types/propTypes'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { selectSnackbar, closeSnackbar } from '../../features/snackbar/snackbarSlice'
import { CloseIcon } from '../../assets/icons/icons'

const MySnackbar:RFC<SnackBarProps> = ({ position, timeout }) => {
  const TIME = `${(timeout - 500) / 1000}s`
  const snackbarState = useAppSelector(selectSnackbar)
  const dispatch = useAppDispatch()
  const { 
    isDisplayed, snackbarType, snackbarMessage, 
    snackbarBtnText, snackbarBtnFunc 
  } = snackbarState

  useEffect(() => {
      if (isDisplayed) {
        const TIMER = setTimeout(() => {
          dispatch(closeSnackbar())
        }, timeout)
        return () => clearTimeout(TIMER)
      }
  },[isDisplayed])

  return (
    <div 
      className={`${classes.snackbar_container} ${isDisplayed && classes.snackbar_show} ${classes[position]} ${classes[snackbarType]}`}
      style={{animationDelay: `0s, ${TIME}`}}
    >
      <p className='pr-2 font-medium'>
        {snackbarMessage}
      </p>
      <button 
        className='border-0 bg-gradient-to-r font-bold text-sm cursor-pointer'
        onClick={snackbarBtnFunc}
      >
        {snackbarBtnText}
      </button>
      <CloseIcon 
        className=''
        onClick={() => dispatch(closeSnackbar())}
      />
    </div>
  )
}

export default MySnackbar