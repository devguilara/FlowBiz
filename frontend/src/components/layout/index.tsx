import { ReactNode } from 'react';
import { Menu } from './menu';

interface LayoutProps {
    title: string;
    children?: ReactNode;
}

export const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
    return (
        <div className="app">
            <section className="main-content columns is-fullheight">
                <Menu />
                <div className="container column is-9">
                    <div className="section">
                        <div className="content">
                            <h1 className="title">{props.title}</h1>
                            {props.children}
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                :root {
                    --background-color: #f0f0f5;
                    --primary-color: #8257e5; /* Roxo Rocketseat */
                    --secondary-color: #ff4f4f; /* Laranja para destaque */
                    --text-color: #333;
                    --subtitle-color: #666;
                    --border-radius: 8px;
                    --box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
                }

                .app {
                    background-color: var(--background-color);
                    min-height: 100vh;
                    display: flex;
                    flex-direction: column;
                    font-family: 'Inter', sans-serif;
                }

                .main-content {
                    background-color: #fff;
                    border-radius: var(--border-radius);
                    box-shadow: var(--box-shadow);
                    overflow: hidden;
                    padding: 2rem;
                }

                .container {
                    padding: 2rem;
                }

                h1.title {
                    font-size: 2.5rem;
                    color: var(--primary-color);
                    font-weight: bold;
                    margin-bottom: 1rem;
                }

                .content {
                    color: var(--text-color);
                    font-size: 1.1rem;
                    line-height: 1.6;
                }

                .button {
                    border-radius: var(--border-radius);
                    transition: all 0.3s ease;
                    font-weight: bold;
                }

                .button.is-link {
                    background-color: var(--primary-color);
                    color: #fff;
                    border: none;
                }

                .button.is-link:hover {
                    background-color: #6941c6;
                    box-shadow: 0 4px 12px rgba(130, 87, 229, 0.2);
                }

                .button.is-info {
                    background-color: var(--secondary-color);
                    color: #fff;
                    border: none;
                }

                .button.is-info:hover {
                    background-color: #e23a3a;
                    box-shadow: 0 4px 12px rgba(255, 79, 79, 0.2);
                }

                .columns {
                    display: flex;
                    gap: 20px;
                }

                .column {
                    flex: 1;
                }
            `}</style>
        </div>
    );
}
