import { useState } from "react";
import { Input } from "components";
import { authService } from "../../../auth/authService";
import Swal from "sweetalert2";

export const LoginPage: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    if (!username || !password) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const data = await authService.login(username, password);
      localStorage.setItem("token", data.token); // Salva o token no localStorage
      Swal.fire({
        title: 'Login realizado com sucesso!',
        text: 'Bem-vindo de volta! ',
        icon: 'success',
        confirmButtonText: 'OK',
      }).then(() => {
        window.location.href = "/home"; // Redireciona para outra página
      });

    } catch (err) {
      setError("Usuário ou senha inválidos.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="hero is-fullheight" style={{ backgroundColor: '#2D2D44' }}>
      <div className="hero-body">
        <div className="container">
          <div className="box" style={{ borderRadius: '12px', boxShadow: '0 4px 14px rgba(0,0,0,0.4)', padding: '2rem', maxWidth: '400px', margin: 'auto' }}>
            <h1 className="title has-text-white has-text-centered">Login</h1>
            {error && <p className="has-text-danger has-text-centered">{error}</p>}
            <div className="columns">
              <Input
                label="Usuário:*"
                columnClass="is-full"
                onChange={setUsername}
                value={username}
                id="inpUsername"
                placeholder="Digite seu usuário"
                required
              />
            </div>
            <div className="columns">
              <Input
                label="Senha:*"
                columnClass="is-full"
                type="password"
                onChange={setPassword}
                value={password}
                id="inpPassword"
                placeholder="Digite sua senha"
                required
              />
            </div>
            <div className="field is-grouped is-grouped-centered mt-4">
              <div className="control">
                <button
                  onClick={handleLogin}
                  className={`button is-link is-medium ${loading ? "is-loading" : ""}`}
                  disabled={loading}
                >
                  Entrar
                </button>
              </div>
              <div className="control">
                <button className="button is-danger is-medium" onClick={() => window.location.href = "/"}>
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
