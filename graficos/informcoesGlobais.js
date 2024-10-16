   const url = ´"https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json"

   async function visualizarinformcoesGlobais() {
        const res = await fetch(url)
        const dados = await res.json()
        const .log(dados);
   }

   visualizarInformacoesGlobais()
