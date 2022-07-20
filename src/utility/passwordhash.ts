var bcrypt = require('bcryptjs');

export class PasswordHash {
    async hash(password: string): Promise<any> {
        let hashedPassword = await new Promise((resolve, reject) => {
            bcrypt.hash(password, 10, function (err, hash) {
                if (err) reject(err)
                resolve(hash)
            });
        })
        return hashedPassword;
    }

    async compare(password: string, hash: any): Promise<any> {
        let comp = await new Promise((resolve, reject) => {
            bcrypt.compare(password, hash, function (err, res) {
                if (res) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            });
        })

        return comp;
    }
}