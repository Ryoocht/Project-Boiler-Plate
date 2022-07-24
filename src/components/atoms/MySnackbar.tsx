import { useEffect } from 'react'
import classes from '../../assets/styles/snackbar.module.css'
import { RFC } from '../../types/reactTypes'
import { SnackBarProps } from '../../types/propTypes'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { selectSnackbar, closeSnackbar } from '../../features/snackbar/snackbarSlice'
import { CloseIcon, SnackbarError, SnackbarInfo, SnackbarSuccess, SnackbarWarning } from '../../assets/icons/icons'
import { SNACKBAR_TYPES } from '../../assets/data/enum'

const MySnackbar: RFC<SnackBarProps> = ({ position, timeout }) => {
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
  }, [isDisplayed])

  const getSnackbarIcons = () => {
    switch (snackbarType) {
      case SNACKBAR_TYPES.ERROR:
        return <SnackbarError className='min-w-[1.6em] h-full mr-4 text-white' />
      case SNACKBAR_TYPES.WARNING:
        return <SnackbarWarning className='min-w-[1.6em] h-full mr-4 text-black' />
      case SNACKBAR_TYPES.INFO:
        return <SnackbarInfo className='min-w-[1.6em] h-full mr-4 text-white' />
      case SNACKBAR_TYPES.SUCCESS:
        return <SnackbarSuccess className='min-w-[1.6em] h-full mr-4 text-white' />
      default: return
    }
  }

  return (
    <div
      className={`${classes.snackbar_container} ${isDisplayed && classes.snackbar_show} ${classes[position]} ${classes[snackbarType]} sm:w-[400px]`}
      style={{ animationDelay: `0s, ${TIME}` }}
    >
      {getSnackbarIcons()}
      <p className='pr-2 text-sm text-white'>
        {snackbarMessage}
      </p>
      <button
        className='px-4 py-2.5 bg-transparen text-sm font-bold leading-tight rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out'
        onClick={snackbarBtnFunc}
      >
        {snackbarBtnText}
      </button>
      <CloseIcon
        className='round-[50%] min-w-[20px] min-h-[20px] ml-4 fill-black cursor-pointer'
        onClick={() => dispatch(closeSnackbar())}
      />
    </div>
  )
}

export default MySnackbar