import { supabase } from './supabaseClient';

// Listar clientes
export const getCustomers = async () => {
  const { data, error } = await supabase.from('customers').select('*').order('date', { ascending: false });
  if (error) console.error(error.message);
  return data || [];
};

// Adicionar cliente
export const addCustomer = async (customer: any) => {
  const { data, error } = await supabase.from('customers').insert([customer]);
  if (error) console.error(error.message);
  return data;
};

// Atualizar cliente
export const updateCustomer = async (id: string, updatedData: any) => {
  const { data, error } = await supabase.from('customers').update(updatedData).eq('id', id);
  if (error) console.error(error.message);
  return data;
};

// Deletar cliente
export const deleteCustomer = async (id: string) => {
  const { data, error } = await supabase.from('customers').delete().eq('id', id);
  if (error) console.error(error.message);
  return data;
};
