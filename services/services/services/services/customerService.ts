import { supabase } from './supabaseClient';

// Função de teste: listar clientes
export const testGetCustomers = async () => {
  const { data, error } = await supabase.from('customers').select('*');

  if (error) console.error('Erro ao buscar clientes:', error.message);
  else console.log('Clientes encontrados:', data);
};
