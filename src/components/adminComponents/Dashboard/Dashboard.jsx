import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
    const navigate = useNavigate();

    return (
        <main className="admin">
            <h1>Panel de administración</h1>

            <button
                className="admin__create-button"
                onClick={() => navigate("/admin/products/create")}
            >
                Crear nuevo producto
            </button>
        </main>
    );
};