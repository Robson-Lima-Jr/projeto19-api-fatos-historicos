import { dadosFatos } from "../data/fatos.js";

function validarAno(anoPesquisado) {
  const anoNumerico = parseInt(anoPesquisado);

  if (isNaN(anoNumerico)) {
    return { validacao: false, mensagem: "Inválido: o valor deve ser um número." };
  } if (anoNumerico < 1920 || anoNumerico > 2020) {
    return { validacao: false, mensagem: "Inválido: o ano deve estar entre 1920 e 2020." };
  } 
    return { validacao: true, valor: anoNumerico };
}

function servicoBuscarFatoPorAno(anoPesquisado) {
  const anoNumerico = parseInt(anoPesquisado);
  const fatoHistorico = dadosFatos.find((fato) => fato.ano === anoNumerico);

  return fatoHistorico.frase;
}

export { servicoBuscarFatoPorAno, validarAno };
