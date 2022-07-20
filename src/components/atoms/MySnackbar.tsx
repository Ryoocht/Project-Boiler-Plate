import { useEffect } from 'react'
import { RFC } from '../../types/reactTypes'
import { SnackBarProps } from '../../types/propTypes'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { selectSnackbar, closeSnackbar } from '../../features/snackbar/snackbarSlice'
import { CloseIcon } from '../../assets/icons/icons'

const MySnackbar:RFC<SnackBarProps> = ({ position, timeout }) => {
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
    <>
    {isDisplayed &&
      <div className={`${position} ${snackbarType}`}>
        <p className='pr-2 font-medium'>
          {snackbarMessage}
        </p>
        <button 
          className='border-0 bg-gradient-to-r font-bold text-sm text-white cursor-pointer'
          onClick={snackbarBtnFunc}
        >
          {snackbarBtnText}
        </button>
        <CloseIcon 
          className=''
          onClick={() => dispatch(closeSnackbar())}
        />
      </div>
    }
    </>
  )
}

export default MySnackbar