export namespace UserManagement {
    export namespace Admin {
        export class AdminUser {
            constructor(public name: string, public email: string, public isSuperAdmin: boolean) {}

            displayFirstInfo(): void{
                console.log(`User Info: Name: ${this.name}, Email: ${this.email}, Status now: ${this.isSuperAdmin}`);
                
            }
            changeStatus(): string {
                if(this.isSuperAdmin === false) {
                    return 'Now you are a SuperAdmin'
                } else return 'You are not a SuperAdmin anymore'
            }
        }
    }
}