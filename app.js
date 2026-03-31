import { createClient } from '@supabase/supabase-js'

const supabase = createClient('SUA_URL_AQUI', 'SUA_CHAVE_AQUI')

async function cadastrarPaciente(nome, celular, email) {
  const { data, error } = await supabase
    .from('pacientes')
    .insert([{ nome, celular, email }])
  
  if (error) alert('Erro ao cadastrar!');
  else alert('Paciente cadastrado com sucesso!');
}