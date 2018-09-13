export class Contact {
    constructor(
        public id: number,
        public name: string,
        public email: string,
        public password: string,
        public cpassword: string,
        public city: number,
        public phone?: number,
    ){}
}
