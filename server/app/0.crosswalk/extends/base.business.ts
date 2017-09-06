export class BaseBusiness<T>{
	private _docRepository: any;

	constructor(
		private docRepository: any
	) {
		this._docRepository = new docRepository();
	}

	query(): Promise<T[]> {
		return this._docRepository.getAll();
	}

	findById(_id: string): Promise<T> {
		return this._docRepository.findById(_id);
	}

	findOne(criteria: T): Promise<T> {
		return this._docRepository.findOne(criteria);
	}

	create(item: T): Promise<T> {
		return this._docRepository.create(item);
	}

	update(_id: string, item: T): Promise<T> {
		return this._docRepository.update(_id, item);
	}

	remove(_id: string): Promise<T> {
		return this._docRepository.remove(_id);
	}
}

Object.seal(BaseBusiness);
