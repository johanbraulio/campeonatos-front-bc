import { Loader2 } from "lucide-react"

const LoginForm = ({ handleSubmit, username, setUsername, password, setPassword, isLoading }) => {

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
            <div className="w-full max-w-sm">

                <div className="mb-6 text-center">
                    <h1 className="text-2xl font-bold text-slate-900">Campeonato de Fútbol Sala</h1>
                    <p className="text-slate-500 text-sm mt-1">Ingresa tus credenciales para continuar</p>
                </div>

                <div className="mb-6 bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-800">
                    <p className="font-semibold mb-2 flex items-center justify-center gap-1.5">
                        <span className="text-blue-600"></span> Credenciales de Prueba
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-center text-xs">
                        <div className="bg-white rounded p-2 border border-blue-100">
                            <span className="block text-slate-500 mb-1">Administrador</span>
                            <span className="font-mono font-bold block">admin</span>
                            <span className="font-mono text-slate-400">admin123</span>
                        </div>
                        <div className="bg-white rounded p-2 border border-blue-100">
                            <span className="block text-slate-500 mb-1">Usuario</span>
                            <span className="font-mono font-bold block">user1</span>
                            <span className="font-mono text-slate-400">user123</span>
                        </div>
                    </div>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="bg-white border border-slate-200 shadow-sm rounded-xl p-6 flex flex-col gap-4"
                >
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                            Usuario
                        </label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            placeholder="Nombre de usuario"
                            className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                            Contraseña
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="••••••••"
                            className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full mt-2 bg-slate-900 hover:bg-slate-800 disabled:bg-slate-400 disabled:cursor-not-allowed text-white text-sm font-semibold py-2.5 rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-sm"
                    >
                        {isLoading ? (
                            <>
                                <Loader2 className="w-4 h-4 animate-spin" />
                                Ingresando...
                            </>
                        ) : (
                            "Ingresar"
                        )}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default LoginForm