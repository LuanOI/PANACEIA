import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/pagehome/PageHome";
import Agenda from "./pages/agenda/PageAgenda";
import Login from "./pages/login/PageLogin";
import Registro from "./pages/login/cadastro/PageRegistro";
import ForgetPassword from "./pages/login/setsenha/PageForgetPassword";
import MostraComentario from "./pages/comentario/PageComentarios";
import CriaComunidades from "./pages/comunidade/PageComunidades";
import Questionario from "./pages/questionario/PageQuestionario";
import Termosdeuso from "./pages/termos/PageTermosDeUso";
import Perfil from "./pages/perfil/PagePerfil";
import PageInteresse from "./pages/interesse/PageInteresse";
import Dashboard from "./pages/dashboard/PageDashboard";

function Routes() {
  return (
    <>
      <Switch>
        <Route path="/registro" component={Registro} />
        <Route path="/forgetpassword" component={ForgetPassword} />
        <Route path="/agendaeeventos" component={Agenda} />
        <Route path="/comunidades" component={CriaComunidades} />
        <Route path="/interesses/:id" component={PageInteresse} />
        <Route path="/depo/:id" component={MostraComentario} />
        <Route path="/questionario/:id" component={Questionario} />
        <Route path="/termosdeuso/" component={Termosdeuso} />
        <Route path="/perfil" component={Perfil} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/home" exact component={Home} />
        <Route path="/" exact component={Home} />
      </Switch>
    </>
  );
}

export default Routes;
