import { supabase } from './supabaseClient';

export const getCustomers = async () => {
  const { data, error } = await supabase.from('customers').select('*');
  if (error) {
    console.error('Erro ao buscar clientes:', error);
  }
  return data || [];
};

export const addCustomer = async (customer: any) => {
  const { data, error } = await supabase.from('customers').insert([customer]);
  if (error) {
    console.error('Erro ao adicionar cliente:', error);
  }
  return data;
};

export const deleteCustomer = async (id: string) => {
  const { data, error } = await supabase.from('customers').delete().eq('id', id);
  if (error) {
    console.error('Erro ao deletar cliente:', error);
  }
  return data;
};
