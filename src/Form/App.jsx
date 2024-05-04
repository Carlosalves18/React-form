import React from "react";
import Input from "./Input";

const App = () => {

    const [nome, setNome] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [senha, setSenha] = React.useState('')
    const [numero, setNumero] = React.useState('')
    const [estado, setEstado] = React.useState('')
    const [cidade, setCidade] = React.useState('')
    const [bairro, setBairro] = React.useState('')
    const [cep, setCep] = React.useState('')
    const [rua, setRua] = React.useState('')
    
    return(
        <>
        <h1>Mídia👌</h1>

        <form  >
        <Input
        label="Nome"
        id="nome"
        type="text"
        value={nome}
        setValue={setNome}
        />
        <p>{nome}</p>
        <Input
        label="Email"
        id="email"
        type="text"
        value={email}
        setValue={setEmail}
        />
        <p>{email}</p>
        <Input
        label="Senha"
        id="senha"
        type="password"
        value={senha}
        setValue={setSenha}
        />
        <p>{senha}</p>
        <Input
        label="Numero"
        id="numero"
        type="number"
        value={numero}
        setValue={setNumero}
        />
        <p>{numero}</p>
        <Input
        label="Estado"
        id="estado"
        type="text"
        value={estado}
        setValue={setEstado}
        />
        <p>{estado}</p>
        <Input
        label="Cidade"
        id="cidade"
        type="text"
        value={cidade}
        setValue={setCidade}
        />
        <p>{cidade}</p>

        <Input
        label="Bairro"
        id="bairro"
        type="text"
        value={bairro}
        setValue={setBairro}
        />
        <p>{bairro}</p>
       
        <Input
        label="CEP"
        id="cep"
        type="number"
        value={cep}
        setValue={setCep}
        />
        
        <p>{cep}</p>
        <Input
        label="Rua"
        id="rua"
        type="text"
        value={rua}
        setValue={setRua}
        />
        <p>{rua}</p>
        </form>

        </>
    )
}
export default App;