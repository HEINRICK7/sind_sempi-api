const mongoose = require('../database');


const RegisterSchema = new mongoose.Schema({
  
    matricula: {
        type: String,
        required: true,
    },
    nome: {
        type: String,
        require: true,
    },
    data_nasc: {
        type: String,
        required: true,
    },
    cpf: {
        type: String,
        required: true,
    },
    rg: {
        type: String,
        require: true,
    },
    uf_servidor: {
        type: String,
        required: true,
    },
    endereco: {
        type: String,
        required: true,
    },
    bairro: {
        type: String,
        require: true,
    },
    cidade: {
        type: String,
        required: true,
    },
    cep: {
        type: String,
        required: true,
    },
    escolaridade: {
        type: String,
        require: true,
    },
    pis_pasep: {
        type: String,
        required: true,
    },    
    est_civil: {
        type: String,
        require: true,
    },
    nome_conjuge: {
        type: String,
        require: true,
    },
    tel_residencial: {
        type: String,

    },
    tel_celular: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    nome_dependentes: {
        type: String,
        required: true,
    },

    orgao_empregador: {
        type: String,
        require: true,
    },
    municipio: {
        type: String,
        require: true,

    },
    uf: {
        type: String,
        require: true,
    },
    data_admissao: {
        type: String,
        required: true,
    },
    telefone: {
        type: String,
        required: true,
    },
    secretaria: {
        type: String,
        required: true,
    },
    departamento: {
        type: String,
        required: true,
    },
    carga_horaria: {
        type: String,
        required: true,
    },
    cargo_funcao: {
        type: String,
        required: true,
    },
    salario_base: {
        type: String,
        required: true,
    },
     createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Register_Filiacao = mongoose.model('Register_Filiacao', RegisterSchema);

module.exports = Register_Filiacao;