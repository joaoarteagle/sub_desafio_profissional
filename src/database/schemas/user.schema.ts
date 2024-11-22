import * as mongoose from 'mongoose';
import { PokemonSchema } from './pokemos.schema';


export const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    pokemons: [PokemonSchema]
})
