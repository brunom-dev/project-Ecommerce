import notFoundImage from "../../assets//images/notfound.svg"

export function NotFound() {
    return(
        <div className='flex justify-center flex-col items-center w-full mt-16'>
            <img src={notFoundImage} alt="ilustracao de personagem com caixa vazia" width={300} />
            <p className='font-semibold text-2xl'>Ops, pagina não encontrada!</p>
        </div>    
    )
}