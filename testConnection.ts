import { addCustomer, getCustomers, deleteCustomer } from './services/customerService';

(async () => {
  console.log('Testando conexão Supabase...');
  
  // Adicionar cliente de teste
  const newCustomer = await addCustomer({
    name: 'Teste Conexão',
    phone: '11999999999',
    value: 100,
    date: new Date().toISOString().split('T')[0],
    status: 'Ativo'
  });
  console.log('Cliente adicionado:', newCustomer);

  // Buscar clientes
  const customers = await getCustomers();
  console.log('Clientes no banco:', customers);

  // Deletar cliente de teste
  if (newCustomer && newCustomer[0]?.id) {
    await deleteCustomer(newCustomer[0].id);
    console.log('Cliente deletado:', newCustomer[0].id);
  }

  console.log('Teste de conexão finalizado!');
})();
