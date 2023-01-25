import styles from '../../styles/ImageGrid.module.css'

interface GridProps{
    children?:JSX.Element | JSX.Element[]
}

const ImageGrid:React.FC<GridProps> =(props)=>{

    const {
        children
    } = props

    return(
        <div className={styles.wrapper}>
            {children}
        </div>
    )
}

export default ImageGrid;