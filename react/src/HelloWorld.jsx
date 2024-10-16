export default function HelloWorld() {

const pessoa = [
    {
    name: "Thomás",
    idade: 17,
    escola: "senai"
},
{
    name: "Maria",
    idade: 17,
    escola: "Novo Éden"
},
{
    name: "Mariana",
    idade: 18,
    escola: "Novo Éden"

},
];

const MapPessoas = ({pessoas}) => {
    return pessoas.map((ps,index) =>
    <div key={index}>
        <h1>{ps.nome}</h1>
        <h1>{ps.idade}</h1>
        <h1>{ps.idade}</h1>

    </div>
    )
}

return (
    <>
    <h1>{pessoa.name}</h1>
    <h1>{pessoa.idade}</h1>
    <h1>{pessoa.escola}</h1>
    </>
)
}