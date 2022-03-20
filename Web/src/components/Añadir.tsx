import React,{FC, useState} from "react";
import Axios from "axios";
import List from "./List";
import styled from '@emotion/styled'

type usuario={
    name:string,
    surname:string,
    email:string
}

const Añadir :FC=()=>{
    
    const [input_name,setName]=useState<string>("");
    const [input_surname,setSurname]=useState<string>("");
    const [input_email,setEmail]=useState<string>("");

    const [input_email_antiguo,setEmailAntiguo]=useState<string>("");

    const [users, setUsers] = useState<usuario[]>([]);

    var usuario= JSON.stringify({
        "name":{input_name}.input_name,
        "surname":{input_surname}.input_surname,
        "email":{input_email}.input_email
    })
    var usuarioeditar=JSON.stringify({
        "name":{input_name}.input_name,
        "surname":{input_surname}.input_surname,
        "email":{input_email}.input_email,
        "emailantiguo":{input_email_antiguo}.input_email_antiguo
    })

    return(
        //dos input correo y nombre boton buscar y boton listar
        <Global>
            <Formulario>
                <Input type="text" value={input_name} placeholder="Nombre..." onChange={(e)=> setName(e.target.value)} ></Input>
                <Input type="text" value={input_surname} placeholder="Apellido..." onChange={(e)=> setSurname(e.target.value)} ></Input>
                <Input type="text"  value={input_email} placeholder="Correo..." onChange={(e)=> setEmail(e.target.value)} ></Input>
                <Input type="text"  value={input_email_antiguo} placeholder="EmailAntiguo...(Solo editar)" onChange={(e)=> setEmailAntiguo(e.target.value)} ></Input>

                <Botones className="Botones">
                    <Button id="añadir"onClick={() => {
                        if(input_email && input_name && input_surname){
                            Axios({
                                method: 'post',
                                url: 'http://localhost:3001/signin',
                                headers: { 'Content-type': 'application/json' },
                                data: usuario
                            }).then((response) => {
                                console.log(JSON.stringify(response.data));
                                alert(JSON.stringify(response.data));
                            }).catch((error) => {
                                console.log(error);
                            })

                        }else{
                            window.alert("Falta algún elemento del Usuario")
                        }
                        }}>Añadir</Button>

                    <Button id="listar" onClick={() => {
                        Axios({
                            url: "http://localhost:3001/getList"
                        }).then((response) => {
                            setUsers(response.data);
                        })
                    }}>Listar</Button>
                    <Button id="borrar" onClick={() => {
                        if(input_email && input_name && input_surname){
                            Axios({
                                method: 'post',
                                url: 'http://localhost:3001/delete',
                                headers: { 'Content-type': 'application/json' },
                                data: usuario
                            }).then((response) => {
                                console.log(JSON.stringify(response.data));
                                alert(JSON.stringify(response.data));
                            }).catch((error) => {
                                console.log(error);
                            })
                        }else{
                            window.alert("Falta algún elemento del Usuario para poder borrarlo")
                        }
                    }}>Borrar</Button>
                    <ButtonEditar inputValue={input_email_antiguo} id="editar"onClick={() => {
                        if( input_email_antiguo && (input_email || input_surname || input_name)){
                            Axios({
                                method: 'post',
                                url: 'http://localhost:3001/editar',
                                headers: { 'Content-type': 'application/json' },
                                data: usuarioeditar
                            }).then((response) => {
                                console.log(JSON.stringify(response.data));
                                alert(JSON.stringify(response.data));
                            }).catch((error) => {
                                console.log(error);
                            })

                        }else{
                            window.alert("Falta algún elemento del Usuario para poder Editarlo")
                        }
                        }}>Editar</ButtonEditar>

                </Botones>
            </Formulario>
            <Listar>
                <List key={input_email} users={users} />
            </Listar>
           
        </Global>

        
    )
}
const Button=styled.button`
    height: 5%;
    width: auto;
    margin: 15px;
    text-align: center;
    background-color: lightskyblue;
    color: black;
    font-family: Arial, Helvetica, sans-serif;
    font-size: large;

`
const Input = styled.input`
    margin-top: 2%;
    margin-right: auto;
    margin-left: 2%;
    width: 90%;
    height: 5%;
    margin-bottom: 2%;
    font-size:large;
    font-family: 'Courier New', Courier, monospace;
    text-align: left;
    box-shadow: 5px black;
    box-decoration-break: clone;
`

const Global = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    text-align: center;
    flex-grow: 1;
    align-self: center;
`

const Formulario = styled.div`
    width:50%;
    display: flex;
    margin-top: 10px; 
    flex-direction: column;
    flex-wrap: nowrap;
    text-align: flex-start;
    flex-grow: 1;
    flex-basis: 33%;
    align-self: center;
`
const Botones = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex-grow: 1;
    flex-basis: 33%;
    justify-content: center;
`
const Listar = styled.div`
    width:50%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    text-align: flex-start;
    flex-grow: 1;
    flex-basis: 33%;
    align-self: center;
`
type MiBottonType = {
    inputValue:string;
}
const ButtonEditar=styled.button<MiBottonType>`
    height: 5%;
    width: auto;
    margin: 15px;
    text-align: center;
    background-color: lightskyblue;
    color: black;
    font-family: Arial, Helvetica, sans-serif;
    font-size: large;
    visibility: ${(props) => props.inputValue === ""?"hidden":"visible"};
`

export default Añadir;