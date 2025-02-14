import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export const Menu: React.FC = () => {
  const router = useRouter();
  const [authToken, setAuthToken] = useState<string | null>(null);
  const [userName, setUserName] = useState<string | null>(null);  // Para armazenar o nome do usuário

  useEffect(() => {
    // Verifica se estamos no lado do cliente antes de acessar o localStorage
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("auth_token");
      const name = localStorage.getItem("nome"); // Recupera o nome do usuário
      setAuthToken(token);
      setUserName(name);  // Define o nome do usuário
    }
  }, []);

  const logout = () => {
    console.log("Iniciando logout...");

    if (typeof window !== "undefined") {
      localStorage.removeItem("auth_token");
      localStorage.removeItem("nome");  // Remove também o nome

      // Verifica se o token foi removido
      const token = localStorage.getItem("auth_token");
      if (!token) {
        console.log("auth_token foi removido com sucesso.");
      } else {
        console.log("auth_token não foi removido.");
      }
      router.push("/");
    }
  };

  return (
    <>
      <aside className="menu-container">
        <p className="menu-label">FlowBiz</p>
        {authToken && userName && (
          <p className="user-info">Olá, {userName}</p> 
        )}
        <ul className="menu-list">
          <MenuItem href="/home" label="Home" icon="fas fa-home" />
          <MenuItem href="/cadastros/usuarios" label="Cadastro de Usuário" icon="fas fa-users" />
          <MenuItem href="/cadastros/produtos" label="Produtos" icon="fas fa-box" />
          <MenuItem href="/config" label="Configurações" icon="fas fa-cogs" />
          {/* Item de logout */}
          <li className="menu-item logout-item">
            <a
              className="menu-link logout-link"
              onClick={logout}
              style={{ cursor: "pointer" }}
            >
              <span className="icon">
                <i className="fas fa-sign-out-alt"></i>
              </span>
              <span>Sair</span>
            </a>
          </li>
        </ul>
      </aside>

      <div className="content-container">
        {/* Seu conteúdo principal */}
      </div>

      <style jsx>{`
        .menu-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 240px; 
          height: 100%;
          background-color: #2d2d44;
          padding: 2rem;
          box-shadow: 2px 0 12px rgba(0, 0, 0, 0.2);
          z-index: 10;
          display: flex;
          flex-direction: column;
        }

        .menu-label {
          color: #fff;
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 2rem;
        }

        .user-info {
          color: #fff;
          font-size: 1.2rem;
          margin-bottom: 2rem;
        }

        .menu-list {
          list-style-type: none;
          padding: 0;
          flex-grow: 1;
        }

        .menu-item {
          transition: background-color 0.3s ease, transform 0.3s ease;
        }

        .menu-item:hover {
          background-color: #4a4a73;
          transform: translateX(8px);
        }

        .menu-link {
          display: flex;
          align-items: center;
          color: #fff;
          font-size: 1.2rem;
          padding: 1rem 1.5rem;
          border-radius: 8px;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .menu-link:hover {
          color: #8257e5;
        }

        .icon {
          margin-right: 1rem;
        }

        .logout-link {
          background-color: #f44336; 
          border-radius: 8px;
          padding: 1rem 1.5rem;
        }

        .logout-link:hover {
          background-color: #d32f2f; 
        }

        .logout-item {
          margin-top: auto; 
        }

        .content-container {
          margin-left: 240px; 
          padding: 2rem;
          background-color: #f4f4f9;
        }

        @media (max-width: 768px) {
          .menu-container {
            width: 200px;
          }

          .content-container {
            margin-left: 0;
            padding: 1rem;
          }
        }
      `}</style>
    </>
  );
};

interface MenuItemProps {
  href: string;
  label: string;
  icon?: string;
  active?: boolean;
  children?: React.ReactNode;
}

const MenuItem: React.FC<MenuItemProps> = ({ href, label, icon, active }: MenuItemProps) => {
  return (
    <li className={`menu-item ${active ? 'is-active' : ''}`}>
      <Link href={href}>
        <a className="menu-link">
          <span className={`icon ${active ? 'has-text-primary' : 'has-text-dark'}`}>
            {icon && <i className={icon}></i>}
          </span>
          <span>{label}</span>
        </a>
      </Link>
    </li>
  );
};
