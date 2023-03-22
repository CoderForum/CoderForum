'use client';

import { useCallback } from 'react';
import { Card, CardBody, CardFooter, CardHeader, PageContainer } from './styles';

export default function Login() {
  const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }, []);

  return (
    <PageContainer>
      <Card onSubmit={handleSubmit}>
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
