import GameCard from '../components/GameCard'
import JogoImg from '../assets/Jogo01.jpg'
const Home = () => {
  const games=[
    { id:'01', titulo: 'Jogo-01', preco: 'R$200.00', imagem:JogoImg},
    { id:'02', titulo: 'Jogo-02', preco: 'R$250.00', imagem:JogoImg},
    { id:'03', titulo: 'Jogo-03', preco: 'R$300.00', imagem:JogoImg},
    { id:'04', titulo: 'Jogo-04', preco: 'R$350.00', imagem:JogoImg},
  ];
  return (
    <main className='px-[5%] mt-10 mb-16 grow'>
      <h2 className='titulo text-3xl'>Jogos em destaques</h2>
      <section className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6'> 
        {games.map((game)=>(
          <GameCard key={game.id} titulo={game.titulo} preco={game.preco} imagem={game.imagem}/>
        ))}
      </section>
      
    </main>
  )
}

export default Home
