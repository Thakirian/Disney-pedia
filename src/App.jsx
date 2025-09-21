import { useState, useEffect } from 'react';
import './App.css';

function App() {
  // 1. Criamos um "estado" para guardar os dados dos personagens que virão da API.
  // Começa como null, pois ainda não temos os dados.
  const [personagens, setPersonagens] = useState(null);

  // 2. useEffect é um "gancho" do React que executa o código dentro dele
  // em momentos específicos.
  useEffect(() => {
    // 3. Função assíncrona para buscar os dados.
    // Usamos async/await para lidar com a "espera" da resposta da API de forma mais limpa.
    const fetchData = async () => {
      try {
        // Faz a chamada para a API. Vamos buscar pelo 'Mickey Mouse' como teste.
        const response = await fetch('https://api.disneyapi.dev/character?name=Mickey%20Mouse');
        
        // Converte a resposta em formato JSON, que o JavaScript entende.
        const data = await response.json();
        
        // 4. O GRANDE TESTE: Imprime os dados recebidos no console do navegador.
        console.log(data);
        
        // 5. Guarda os dados recebidos no nosso estado.
        // A API da Disney retorna um objeto com uma propriedade "data" que contém a lista de personagens.
        setPersonagens(data.data);

      } catch (error) {
        // Se der algum erro na chamada, imprime o erro no console.
        console.error("Erro ao buscar dados da API:", error);
      }
    };

    // Executa a função que acabamos de criar.
    fetchData();

  // 6. O array vazio [] no final é MUITO IMPORTANTE!
  // Ele diz ao useEffect para executar este código APENAS UMA VEZ,
  // quando o componente é montado na tela pela primeira vez.
  }, []);

  return (
    <div>
      <h1>Teste da API da Disney</h1>
      <p>Abra o console do navegador para ver os resultados!</p>
    </div>
  );
}

export default App;