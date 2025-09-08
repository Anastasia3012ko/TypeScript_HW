export var UserManagement;
(function (UserManagement) {
    let Admin;
    (function (Admin) {
        class AdminUser {
            name;
            email;
            isSuperAdmin;
            constructor(name, email, isSuperAdmin) {
                this.name = name;
                this.email = email;
                this.isSuperAdmin = isSuperAdmin;
            }
            displayFirstInfo() {
                console.log(`User Info: Name: ${this.name}, Email: ${this.email}, Status now: ${this.isSuperAdmin}`);
            }
            changeStatus() {
                if (this.isSuperAdmin === false) {
                    return 'Now you are a SuperAdmin';
                }
                else
                    return 'You are not a SuperAdmin anymore';
            }
        }
        Admin.AdminUser = AdminUser;
    })(Admin = UserManagement.Admin || (UserManagement.Admin = {}));
})(UserManagement || (UserManagement = {}));
//# sourceMappingURL=userManagement.js.map