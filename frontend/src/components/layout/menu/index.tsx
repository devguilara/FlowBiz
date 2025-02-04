import Link from "next/link"
export const Menu: React.FC = () => {
    return(
        <aside className="column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile">
        <p className="menu-label is-hidden-touch">Minhas Vendas</p>

        <ul className="menu-list">
            <MenuItem href="/" label="Home" icon="fas fa-home" />
            <MenuItem href="/cadastros/usuarios" label="Cadastro de Usuário" icon="fas fa-users" />
            <MenuItem href="/cadastros/produtos" label="Produtos" icon="fas fa-box" />
            <MenuItem href="/config" label="Configurações" icon="fas fa-cogs" />
        </ul>
    </aside>
    )
}

interface MenuItemProps {
    href: string,
    label: string,
    icon?: string,
    active?: boolean,
    children?: React.ReactNode
}

const MenuItem: React.FC<MenuItemProps> = (props: MenuItemProps) => {
    return(
        <li>
            <Link href={props.href}>
                <span className="has text-dark">
                
                </span>{props.label}
            </Link>
        </li>
    )
}