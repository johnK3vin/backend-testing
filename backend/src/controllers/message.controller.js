import { messageModel } from '../dao/models/messages.models.js';

export const getMessages = async (req, res) => {
    const {limit} = req.query;
    try {
        const messages = await messageModel.find().limit(limit);
        res.status(200).send({respuesta: 'ok', mensaje: messages})
    } catch (error){
        res.status(400).send({respuesta: 'Error', mensaje: error})
    }
}

export const createMessage = async (req, res) => {
    const {messageData} = req.body;
    try {
        const message = await messageModel.create(messageData);
        res.status(201).send({respuesta: 'ok', mensaje: message})
    } catch (error){
        res.status(400).send({respuesta: 'Error', mensaje: error})
    }
}

export const messageController = {
    getMessages,
    createMessage
}