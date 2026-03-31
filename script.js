const _supabaseUrl = 'https://bxwvdkshvnonglcacwfa.supabase.co' 
const _supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ4d3Zka3Nodm5vbmdsY2Fjd2ZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ5NzM3NjEsImV4cCI6MjA5MDU0OTc2MX0.0t-EaguTILFT9EtU5BcFGQipuh0rYh4n0ABMuXO2FoI' 
const supabaseClient = supabase.createClient(_supabaseUrl, _supabaseKey)

async function salvar() {
    const nome = document.getElementById('nome').value
    const celular = document.getElementById('celular').value
    const email = document.getElementById('email').value

    if (!nome || !celular || !email) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    const { data, error } = await supabaseClient
        .from('pacientes') 
        .insert([{ nome, celular, email }])

    if (error) {
        console.error(error)
        alert("Erro ao salvar: " + error.message)
    } else {
        alert("Paciente cadastrado com sucesso!")
        document.getElementById('nome').value = ''
        document.getElementById('celular').value = ''
        document.getElementById('email').value = ''
    }
}