import React from 'react'

function Info(props) {

    const style = {
        marginTop: "-25px",
        marginBottom: "-15px",
        width: "150px"
    }
    return (
        <>
            <img style={style} src={props.pic} alt="pokemon-img" />
            <p>NAME = {props.name.toUpperCase()}</p>
            <p>HEIGHT = {props.height}</p>
            <p>WEIGHT = {props.weight}</p>
        </>
    )
}

export default Info
