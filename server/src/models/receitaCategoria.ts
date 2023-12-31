import mongoose from 'mongoose';

const receitaCategoriaSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
    receitaSubcategorias: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ReceitaSubcategoria' }]
});

const ReceitaCategoria = mongoose.model('ReceitaCategoria', receitaCategoriaSchema, 'ReceitaCategoria');

export default ReceitaCategoria;
