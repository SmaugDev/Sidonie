"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
const path_1 = require("path");
const database = new index_1.default(path_1.join(__dirname, 'db.json'));
database.on('warn', (warn) => {
    console.log(warn);
});
database.on('error', (err) => {
    console.log(err);
});
function get() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(yield database.getAll());
    });
}
get();
// setTimeout(() => {
// 	async function get() {
// 		console.log(await database.get('test'));
// 	}
// 	get()
// }, 1000)
