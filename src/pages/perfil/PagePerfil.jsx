import React, { useState } from "react";
import usuario from "../../assets/img/usuario.png";
import {
  Form,
  FormWrapper,
  FormHeader,
  FormBody,
  FormFieldset,
  FormInput,
  FormButton,
  Button,
  Buttoon,
  Input,
} from "../../assets/style/StylePagePerfil";

const PagePerfil = () => {
  const [user, setUser] = useState({
    name: "",
    image: "",
    email: "",
    password: "",
  });

  const [status, setStatus] = useState({
    type: "",
    mensagem: "",
  });

  //Receber os dados do formulário
  const valueInput = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  //Enviar os dados para o back-end
  const addUser = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    const saveDataForm = true;

    if (saveDataForm) {
      setStatus({
        type: "success",
        mensagem: "Informações alteradas com sucesso",
      });
      setUser({
        name: "",
        email: "",
        password: "",
      });
    } else {
      setStatus({
        type: "error",
        mensagem: "Erro: Usuário não cadastrado!",
      });
    }
  };

  function validate() {
    if (!user.name)
      return setStatus({
        type: "error",
        mensagem: "Erro: Necessário preencher o campo nome!",
      });
    if (!user.email)
      return setStatus({
        type: "error",
        mensagem: "Erro: Necessário preencher o campo e-mail!",
      });
    if (!user.password)
      return setStatus({
        type: "error",
        mensagem: "Erro: Necessário preencher o campo senha!",
      });
    if (user.password.length < 6)
      return setStatus({
        type: "error",
        mensagem: "Erro: A senha precisa ter pelo menos seis caracteres!",
      });

    return true;
  }

  function sair() {
    localStorage.removeItem("isLogado");
    window.location.replace("/login");
  }

  function AcessoAdmin() {
    window.location.replace("/dashboard");
  }

  return (
    <FormWrapper>
      <FormBody>
        <FormHeader>
          <h2>Perfil</h2>
          <div>
            <Button onClick={sair}>Sair</Button>
            <Buttoon onClick={AcessoAdmin}>Acesso de Admin</Buttoon>
          </div>
        </FormHeader>
        <img src={usuario} alt="foto usuaria" />
        <Form onSubmit={addUser} id="form">
          <FormFieldset>
            <label>Alterar a Foto: </label>
            <Input
              type="file"
              name="name"
              placeholder="foto"
              onChange={valueInput}
              value={user.image}
            />
          </FormFieldset>
        {status.type === "success" ? (
          <p style={{ color: "#033d11" }}>{status.mensagem}</p>) : ("")}

        {status.type === "error" ? (
          <p style={{ color: "#ff0000" }}>{status.mensagem}</p>) : ("")}
          
          <FormFieldset>
            <label>Editar o Nome: </label>
            <FormInput
              type="text"
              name="name"
              placeholder="Nome completo do usuário"
              onChange={valueInput}
              value={user.name}
            />
          </FormFieldset>

          <FormFieldset>
            <label>E-mail: </label>
            <FormInput
              type="email"
              name="email"
              placeholder="Troque seu email"
              onChange={valueInput}
              value={user.email}
            />
          </FormFieldset>

          <FormFieldset>
            <label>Trocar de Senha: </label>
            <FormInput
              type="password"
              name="password"
              placeholder="Digite a nova senha"
              autoComplete="on"
              onChange={valueInput}
              value={user.password}
            />
          </FormFieldset>

          <FormFieldset>
            <FormButton type="submit">Editar Perfil</FormButton>
          </FormFieldset>
        </Form>
      </FormBody>
    </FormWrapper>
  );
};
export default PagePerfil;
