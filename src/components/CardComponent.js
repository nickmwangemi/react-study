import React from 'react'

export default function CardComponent({title,subtitle}) {
    return (
        <div style={styles.card}>
            <h1 style={styles.title}>{title}</h1>
            {subtitle && <h2 style={styles.subtitle}>{subtitle}</h2>}
        </div>
    )
}


const styles = {
    card : {
        padding: '20px',
        margin: '20px',
        textAlign: 'center',
        color: 'white',
        backgroundColor:'skyblue',
        border: '1px solid black'

    },
    title:{
        fontSize: '30px',
        lineHeight: '24px'
        
    }
    ,
    subtitle:{
        fontSize: '14px',
        lineHeight: '18px'

    }
}