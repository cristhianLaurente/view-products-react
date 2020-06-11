export class AuthService {
    token;

    constructor() {
        this.loadTokenClient()
    }

    loadTokenClient = () => {
        console.log('cargando')
        if (localStorage.getItem('tokenclient')) {
            this.token = localStorage.getItem('tokenclient')
        }
    }


    saveToken = (tokenClient) => {
        console.log('guardando')
        this.token = tokenClient;
        localStorage.setItem('tokenclient', this.token);
    }

    isloggedSuccessClient = () => {
        console.log('entraste?')
        try {
            this.loadTokenClient();
            if (this.token) {
                return true
            } else {
                console.log(this.token, 'token - entrando')
                if (this.token) {
                    console.log(this.token, 'token -')
                    return true
                }
                return false
            }
        } catch (err) {
            localStorage.removeItem('tokenclient')
            throw err
        }


    }


    logoutClient = () => {
        this.token = null;
        localStorage.removeItem('tokenclient');
    }

}