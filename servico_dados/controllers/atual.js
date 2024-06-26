var Atual = require("../models/atual")


module.exports.findById = async (id) => {
    try {
        let atual = await Atual.findOne({ _id: id }).exec();

        return atual;
	} catch (error) {
        console.error(error);
        throw new Error("Error fetching atual");
    }
};

module.exports.deleteById = async (id) => {
    try {
        let atual = await Atual.findOneAndDelete({_id: id}).exec();
		if (!atual) {
			throw new Error("Atual not found");
		}

        return atual
	} catch (error) {
        console.error(error);
        throw new Error("Error fetching atual");
    }
};

module.exports.insert = atual => {
    return Atual.create(atual)
}

module.exports.list = async () => { // query 
    try {
        let lista = await Atual.find().sort({ _id: 1 }).exec();

		return lista;
    } catch (error) {
        console.error(error);
        throw new Error("Error fetching dates");
    }
}

module.exports.update = async (id,atual) => {
    try {
        let updatedAtual = await Atual.findOneAndUpdate({_id: id}, atual, {new: true});
        if (!updatedAtual) {
            throw new Error('atual not found (update)');
        }
    
        return updatedAtual;
    
    } catch (error) {
        console.error(error);
        throw new Error("Error fetching atual");
    }
}