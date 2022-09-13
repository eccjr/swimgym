import React from 'react'
import InputMask from "react-input-mask";
import Button from '../../common/Button';
function Input(props) {
  return (
    <div>
      <label>{props.children}</label>
      <InputMask name={props.name} id={props.id} mask={props.mask} required />
    </div>
  )
}
export default function Cadastrese() {
  return (
    <section className="cadastre-se">
      <h1>CADASTRE-SE E AGENDE SUA AULA EXPERIMENTAL</h1>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        action="/success"
        subject="Contato pelo formulário do site academiaswimgym.com.br">
        <input type="hidden" name="form-name" value="contact" />
        <Input id="input_name" name="nome">Nome</Input>
        <Input id="input_email" name="email">Email</Input>
        <Input id="input_number" name="telefone" mask="(99) 99999-9999">Telefone para contato</Input>
        <select id="input_modalidade" name="opcao">
          <option value="Personal Grupo">Personal Grupo</option>

          <option value="Musculação">Musculação</option>

          <option value="Personal Training (adulto e infantil)">Personal Training (adulto e infantil)</option>

          <option value="Treinamento Funcional (Infantil e Adulto)">Treinamento Funcional (Infantil e Adulto)</option>

          <option value="Pilates">Pilates</option>

        </select>
        <div>
          <label htmlFor="input__mensagem">Mensagem (opcional)</label>
          <textarea cols="40" rows="3" id="input__mensagem" name="mensagem"></textarea>
        </div>
        <Button type="submit">ENVIAR</Button>
      </form>
    </section>
  )
}