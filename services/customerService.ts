import { supabase } from './supabaseClient';

export const getCustomers = async () => {
  const { data, error } = await supabase.from('customers').select('*');
  if (error) console.error('Erro ao buscar clientes:', error.message);
  return data || [];
};
