export type LoadingProps = {
    type?: 'button' | 'page'
    shape: 'circle' | 'bars' | 'cradle' | 'dots' | 'spinner' | 'wave'
    color?: string
}

export type SnackBarProps = {
    position: 'top_left' | 'top_right' | 'bottom_left' | 'bottom_right'
    timeout: number
}

export type ChildrenProp = {
    children: JSX.Element
}