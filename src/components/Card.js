export default function Card({color,children}) {

    return (
        <div style={{
            padding: '20px',
            textAlign:'center',
            color:'white',
            backgroundColor:color
        }}>
            {children}
        </div>
    )
}


