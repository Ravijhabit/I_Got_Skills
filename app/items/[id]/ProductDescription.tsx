import styles from './page.module.css'
export default function ProductDescription({stub}:{stub: any}){
    return(
        <section className={styles.productDescription}>
            <h2>{stub?.productName}</h2>
            <h4>Description</h4>
            <br/>
            <p>{stub?.description}</p>
            <br/>
            {/* currency is not shown */}
            <strong>Price: {stub?.productPrice}</strong>
            <br/>
            <strong>Tag: </strong>{stub?.productTag}
            <br/>
            <br/>
            <h5>Seller Information</h5>
            <strong>{stub?.seller?.name}</strong>
        </section>
    )
}