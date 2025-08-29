type User = {
    name: string;
    email: string;
}
type Admin = {
    name: string;
    permissions: string[];
}

type AdminUser = Admin & User;

const adminUser: AdminUser = {
    name: "Anna",
    permissions: ["read", "write", "delete"],
    email: "anna@example.com",
}

console.log(adminUser);
