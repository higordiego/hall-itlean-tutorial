
const Contato = require('../models/contato')

exports.create = async (req, res) => {
    try {
        const { name, email, phone } = req.body
        const contato = await Contato.create({ name, email, phone })
        return res.status(200).json(contato)
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

exports.findAll = async (req, res) => {
    try {
        let query = {}    
        if (req.query) query = req.query

        const contato = await Contato.find(query)
        return res.status(200).json(contato)
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

exports.findOne = async (req, res) => {
    try {
        const { _id } = req.params
        const contato = await Contato.findById(_id)
        return res.status(200).json(contato)
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

exports.update = async (req, res) => {
    try {
        const { _id } = req.params
        const { name, email, phone } = req.body
        const contato = await Contato.updateOne({ _id }, { name, email, phone })
        return res.status(200).json(contato)
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

exports.delete = async (req, res) => {
    try {
        const { _id } = req.params
        const contato = await Contato.remove({ _id })
        return res.status(200).json(contato)
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}