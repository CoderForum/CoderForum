'use client';

import { Card, CardBody, CardFooter, CardHeader, PageContainer } from './styles';

export default function Login() {
  return (
    <PageContainer>
      <Card>
        <CardHeader>
          <h1>Login</h1>
          <span>Insira suas credenciais para se autenticar.</span>
        </CardHeader>

        <CardBody>
          <input
            autoComplete="on"
            id="user"
            placeholder="Usuário"
            type="text"
          />

          <input
            autoComplete="on"
            id="password"
            placeholder="Senha"
            type="password"
          />
        </CardBody>

        <CardFooter>
          <button type="submit">Entrar</button>
        </CardFooter>
      </Card>
    </PageContainer>
  );
}
