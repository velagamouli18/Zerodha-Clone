const {HoldingModel} = require("../model/HoldingModel");
const {OrderModel} = require("../model/OrderModel");
const {PositionModel} = require("../model/PositionModel");
const { askGroq } = require("../services/groqService");
const { buildPrompt } = require("../services/promptBuilder");

const chat = async (req, res) => {

    try {

        const { messages } = req.body;
        const holdings = await HoldingModel.find({
            userId: req.user.id,
        });

        const orders = await OrderModel.find({
            userId: req.user.id,
        });

        const positions = await PositionModel.find({
            userId: req.user.id,
        });
        const systemMessage = buildPrompt(
            holdings,
            orders,
            positions
        );

        const reply = await askGroq([
            systemMessage,
            ...messages
        ]);

        return res.json({
            reply
        });

    } catch (err) {

        console.error(err);

        return res.status(500).json({
            error: "Failed to generate response."
        });

    }

};

module.exports = {
    chat
};