/*
  # Cálculo de aposentadoria

    - Crie um programa para calcular a aposentadoria de uma pessoa.

    - Calculo fiticio, pois existem outras regras nesse processo

    - Utilize as regras a seguir para calcular se a pessoa está apta ou não para se aposentar:

      -- O tempo de contribuição mínimo para homens é de 35 anos e, para mulheres, 30 anos;

      -- A soma da idade com o tempo de contribuição do homem precisa ser de no mínimo 95 anos, enquanto a mulher precisa ter no mínimo 85 anosna soma;

      -- Imprima na tela as mensagens, baseado nas regras

      -> SE a pessoa estiver aposentada: Silvana, você pode se aposentar!;
      -> SE a pessoa NÃO estiver aposentada: Silvana, você ainda não pode se aposentar!;

*/
const Pessoa = (nome, tempoDeContribuicao, sexo, idade) => ({
  nome, tempoDeContribuicao, sexo, idade
});

const calculoTotalContribuicao = (tempoDeContribuicao, idade) =>
  tempoDeContribuicao + idade;

const contribuicaoMinimaConformeSexo = sexo => {
  const contribuicaoMinimaHomem = 35;
  const contribuicaoMinimaMulher = 30;

  const contribuicaoMinima = sexo = "H" ? contribuicaoMinimaHomem : contribuicaoMinimaMulher;

  return contribuicaoMinima;
}

const totalMinimoAposentarConformeSexo = sexo => {
  const totalMinimoParaSeAposentarMulher = 85;
  const totalMinimoParaSeAposentarHomem = 95;

  return sexo == "H" ? totalMinimoParaSeAposentarHomem : totalMinimoParaSeAposentarMulher;
}

const podeSeAposentar = ({tempoDeContribuicao, sexo, idade}) => {
  // Se o tempo de contribuição é o mínimo
  const regra1 = tempoDeContribuicao >= contribuicaoMinimaConformeSexo(sexo);
  const regra2 = totalMinimoAposentarConformeSexo(sexo) <= calculoTotalContribuicao(tempoDeContribuicao, idade);

  return regra1 && regra2;

}

function calcularAposentadoria(pessoa) {
  if (podeSeAposentar(pessoa)) {
    console.log(`${pessoa.nome}, você pode se aposentar!`);
  } else {
    console.log(`${pessoa.nome}, você ainda não pode se aposentar!`);
  }
}

const pessoas = [
  Pessoa("Carlos", 35, "H", 60),
  Pessoa("Godoy", 30, "H", 60),
  Pessoa("Luiz", 35, "H", 55),
  Pessoa("Tamara", 35, "M", 55),
  Pessoa("Anne", 30, "M", 50), 
  Pessoa("Jana", 35, "M", 40) 
]

for (let pessoa of pessoas) {
  calcularAposentadoria(pessoa);
}