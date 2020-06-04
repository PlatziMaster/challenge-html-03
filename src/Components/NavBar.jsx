import React from 'react';
import ReactDom from 'react-dom';

export default function NavBar(){
    return(
        <div style={styles.heroHead} class="Hero-head">
            <div class="Hero-logo">
                <h3 style={styles.heroLogoH3}>Mi Site</h3>
            </div>
            <div class="Hero-nav">
                <ul style={styles.heroNavUl}>
                <li style={styles.heroNavLi}>item 1</li>
                <li style={styles.heroNavLi}>item 2</li>
                </ul>
            </div>
        </div>
    );
}
const styles = {
    heroHead : {
        display:'flex',
        justifyContent: 'space-between',
        alignItem:"center",
        position:'relative',
        margin:0,
        padding:'1em 0',
    },
    heroLogoH3:{
        fontSize:'28px',
        margin:0,
        padding:0
    },
    heroNavUl:{
        listStyle:'none',
        margin:0,
        padding:0,
    },
    heroNavLi:{
        backgroundColor:'rgba(175, 141, 238, 0.6)',
        color:'white',
        display:'inline-block',
        margin:' 0 0 0 1em',
        padding:10,
        borderRadius:5,
    },
};