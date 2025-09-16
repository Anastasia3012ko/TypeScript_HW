export namespace UserManagement {
    export namespace Admin {
        export class AdminUser {
            constructor(public name: string, public email: string, public isSuperAdmin: boolean) {}

            displayFirstInfo(): void{
                console.log(`User Info: Name: ${this.name}, Email: ${this.email}, Status now: ${this.isSuperAdmin}`);
                
            }
            toggleStatus(): void {

                this.isSuperAdmin = !this.isSuperAdmin;
                console.log(`Status changed. Now SuperAdmin = ${this.isSuperAdmin}`);
            }
        }
    }
}