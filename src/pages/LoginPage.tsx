import { useState } from 'react';
import { supabase } from '../app/supabaseClient';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) return alert(error.message);
    navigate('/');
  };

  return (
    <div className="p-4 max-w-md mx-auto flex flex-col gap-4">
      <h1 className="text-xl font-bold">Login</h1>
      <input
        className="border p-2"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="border p-2"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin} className="bg-green-600 text-white py-2 px-4">
        Ingresar
      </button>
    </div>
  );
};

export default LoginPage;
