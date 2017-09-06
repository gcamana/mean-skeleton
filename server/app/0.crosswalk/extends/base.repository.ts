import * as mongoose from "mongoose";

export class BaseRepository<T extends mongoose.Document>{

	private _model: mongoose.Model<mongoose.Document>;

	constructor(schemaModel: mongoose.Model<mongoose.Document>) {
		this._model = schemaModel;
	}

	query(q: mongoose.Query<T[]>): Promise<T[]> {
		return this.promisify(q);
	}

	getAll(criteria: Object = {}): Promise<T[]> {
		let query = this._model.find(criteria);
		return this.promisify(query);
	}

	findById(_id: string): Promise<T> {
		let query = this._model.findById(_id);
		return this.promisify(query);
	}

	findOne(criteria: Object): Promise<T> {
		let query = this._model.findOne(criteria);
		return this.promisify(query);
	}

	create(item: T): Promise<T> {
		return new Promise((resolve, reject) => {
			item['createdOn'] = item['modifiedOn'] = new Date().toISOString();

			this._model.create(item, (error: any, doc: any) => {
				if (error) reject(error);
				resolve(doc);
			});
		});
	}

	update(_id: string, item: T): Promise<T> {
		item['modifiedOn'] = new Date().toISOString();
		let query = this._model.findByIdAndUpdate(_id, item, { new: true });
		return this.promisify(query);
	}

	remove(_id: string): Promise<T> {
		let query = this._model.findByIdAndRemove(_id);
		return this.promisify(query);
	}

	extendCondition(baseCondition: any, key: string, op: string, value: any) {
		if (!value) return baseCondition;

		let operation = {};
		operation[op] = value;

		let newCondition = {};
		newCondition[key] = operation;

		return Object.assign({}, baseCondition, newCondition);
	}

	promisify(query: any): any {
		return new Promise((resolve, reject) => {
			query.exec((err: any, docs: any) => {
				if (err) reject(err);
				resolve(docs);
			});
		});
	}
}
Object.seal(BaseRepository);
