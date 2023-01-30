import styles from '../../styles/ImageGrid.module.css'

interface GridProps{
    children?:JSX.Element | JSX.Element[]
    columnWidth?:string
}

const ImageGrid:React.FC<GridProps> =(props)=>{

    const {
        children,
        columnWidth='10rem'
    } = props

    return(
        <div className={styles.wrapper} style={{columnWidth:columnWidth}}>
            {children}
        </div>
    )
}

export default ImageGrid;