import * as crypto from 'crypto';

export class Crypto {

	static createSalt() {
		return crypto.randomBytes(128).toString('base64');
	}

	static hashPwd(salt: any, pwd: any): any {
		let hmac = crypto.createHmac('sha1', salt);
		hmac.setEncoding('hex');
		hmac.write(pwd);
		hmac.end();
		return hmac.read();
	}

}
