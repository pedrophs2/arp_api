import passCrypt from "../../../utils/pass-crypt";

class AuthFix {

    public checkEncryption(data: string) {
        return passCrypt.encrypt(data)
    }

}

export default new AuthFix()