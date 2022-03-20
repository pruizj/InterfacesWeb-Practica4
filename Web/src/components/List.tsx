import React,{FC, useState} from "react";
import styled from '@emotion/styled'

type usuario={
    name:string,
    surname:string,
    email:string
}
type input={
    users:usuario[];
}
const List : FC<input>=({users})=>{

    return(

        <div className="listUsers">
            {users.map(elem=> <User key = {elem.email}>{"Name: "+elem.name}<br/>{ "Surname: "+elem.surname}<br/>{"Email: "+elem.email}<br/></User>)}
        </div>
    )

}

const User = styled.div`
    display: flex;
    overflow: hidden;
    align-content: center;
    justify-content: center;
    flex-flow: row wrap;
    background: lightskyblue;
    border-radius: 0.5rem;
    margin: 0.75rem;
    border: 3px black;
    border-style:outset;
    flex-basis: 25rem;
    flex-grow: 1;
    flex-shrink: 1;
`
export default List;