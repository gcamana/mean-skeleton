import { Crypto } from './../0.crosswalk/utils/Crypto';
import { BaseBusiness } from './../0.crosswalk/extends/base.business';
import { UserModel } from './../6.models/user.model';
import { UserRepository } from './../4.repositories/user.repository';

export class UserBusiness extends BaseBusiness<UserModel> {

	private _userRepository: UserRepository;

	constructor() {
		super(UserRepository);

		this._userRepository = new UserRepository();
	}

	create(user: UserModel): Promise<UserModel> {
		if (user.password) {
			user.salt = Crypto.createSalt();
			user.hashedPwd = Crypto.hashPwd(user.salt, user.password);
			delete user.password;
		}

		return this._userRepository.create(user);
	}

	update(_id: string, user: UserModel): Promise<UserModel> {
		if (user.password) {
			user.salt = Crypto.createSalt();
			user.hashedPwd = Crypto.hashPwd(user.salt, user.password);
			delete user.password;
		}

		return this._userRepository.update(_id, user);
	}
}

Object.seal(UserBusiness);
