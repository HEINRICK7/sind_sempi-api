const express = require('express');
//const { update } = require('../../models/Register_Filiacao');

const Register_Filiacao = require('../../models/Register_Filiacao');

const router = express.Router()
module.exports = {
    async store(req, res){
        const { cpf } = req.body;

        try {
            if (await Register_Filiacao.findOne({ cpf }))
                return res.status(400).send({ error: 'User already exists' });

                const user = await Register_Filiacao.create(req.body);


            return res.send({user});

        } 
        catch (error) {

            return res.status(400).send({ error: 'Registration failed'});

        }
        

    },

    async index(req, res) {
        try {
            const users = await Register_Filiacao.find();

            return res.send({ users })
        } catch (error) {

            return res.status(400).send({ error: 'Error loading'});
            
        }
    },

    async show(req, res) {
        try {
            const userId = await Register_Filiacao.findById(req.params.userId);

            return res.send({ userId })
        } catch (error) {

            return res.status(400).send({ error: 'Error loading'});
            
        }
    },
    async update(req, res) {
        try {
          const {
            matricula,
            nome,
            data_nasc,
            cpf,
            rg,
            uf_servidor,
            endereco,
            bairro,
            cidade,
            cep,
            escolaridade,
            pis_pasep,
            est_civil,
            nome_conjuge,
            tel_residencial,
            tel_celular,
            email,
            ome_dependentes,
            orgao_empregador,
            municipio,
            uf,
            data_admissao,
            telefone,
            secretaria,
            departamento,
            carga_horaria,
            funcao,
            salario_base} = req.body;

            const user_servidor = await Register_Filiacao.findByIdAndUpdate(req.params.userId, {
                matricula,
                nome,
                data_nasc,
                cpf,
                rg,
                uf_servidor,
                endereco,
                bairro,
                cidade,
                cep,
                escolaridade,
                pis_pasep,
                est_civil,
                nome_conjuge,
                tel_residencial,
                tel_celular,
                email,
                ome_dependentes,
                orgao_empregador,
                municipio,
                uf,
                data_admissao,
                telefone,
                secretaria,
                departamento,
                carga_horaria,
                funcao,
                salario_base
            }, {new: true});
            
            await user_servidor.save();

            return res.send({user_servidor})    
        } catch (error) {
            return res.status(400).send({error: 'Error update '});
        }
    },
    async destroy(req, res) {
        try {
           await Register_Filiacao.findByIdAndRemove(req.params.userId);
            return res.send()
        } catch (error) {

            return res.status(400).send({ error: 'Error deleting project'});
            
        }
    }

}