import React from 'react';

export default function ErrorCuatroCeroCuatro(){
    return(
        <div style={styles.heroContetn} className="Hero-content">
            <div style={styles.heroTitle} className="Hero-title">
                <h1 style={styles.heroTitleH1}>404</h1>
                <h2 style={styles.heroTitleH2}>Lost in Space</h2>
                <h3 style={styles.heroTitleH3}>It seems you are lost in space</h3>
                <a style={styles.heroTitleBtn} href="#" className="btn">Back to home</a>
            </div>
            <div className="Hero-image">
                <figure style={styles.heroImageFigura}>
                <img src="https://images.vexels.com/media/users/3/152639/isolated/preview/506b575739e90613428cdb399175e2c8-dibujos-animados-de-astronauta-espacial-by-vexels.png" alt="404" />
                </figure>
            </div>
        </div>
    );
}

const styles = {
    heroContetn:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
    },
    heroTitle:{
        padding:'1em',
    },
    heroTitleH1:{
        fontSize:'400px',
        color:'rgba(255,255,255,0.2)',
        margin:0,
        padding:0,
    },
    heroTitleH2:{
        fontSize:'45px',
        margin:'-130px 0 0 0',
    },
    heroTitleH3:{
        fontWeight:200,
        margin:'1em 0 1.5em 0',
    },
    heroTitleBtn:{
        backgroundColor: 'rgba(128, 2, 130, 0.6)',
        cursor: 'pointer',
        margin: '30px 0px',
        padding: '12px',
        border: '1px solid rgba(41, 0, 75, 0.9)',
        color: 'white',
        fontWeight: '200',
        textTransform: 'uppercase',
        fontSize: '15px',
        borderRadius: '5px',
        letterSpacing: '1.5px',
        boxShadow: '0 1px 2px 0 rgba(0,0,0,.3)',  
        textDecoration:'none',      
    },
    heroImageFigura:{
        margin:0,
        padding:0,
        textAlign:'right',
    },
}