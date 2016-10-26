import { Mongo } from 'meteor/mongo';
 
export const Reuniones = new Mongo.Collection('reuniones');
export const Acuerdos = new Mongo.Collection('acuerdos');
export const Categorias = new Mongo.Collection('categorias');