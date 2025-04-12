
import { supabase } from '../services/supabaseClient';
import { useEffect } from 'react';

const HomePage = () => {
  useEffect(() => {
    const test = async () => {
      const { data, error } = await supabase.from('test').select('*');
      console.log(data, error);
    };
    test();
  }, []);

  return (
    <div className="p-4 text-center text-xl font-bold">
      Formlyzer conectado, SR SR 🚀
    </div>
  );
};


export default HomePage;
