let dummyEmployees = [

    {
        empName: "John Smith",
        email: "john@gmail.com",
        TP: "0771234567",
        gender: "Male",
        DOJ: "2024-03-15",
        departments: "Product & Engineering",
        designations: "Full-Stack Developer",
        types: "Permanent",
        salary: "250000"
    },

    {
        empName: "Amanda Perera",
        email: "amanda@gmail.com",
        TP: "0772345678",
        gender: "Female",
        DOJ: "2025-01-05",
        departments: "Operations & HR",
        designations: "HR Executive",
        types: "Contract",
        salary: "150000"
    },

    {
        empName: "Nimal Silva",
        email: "nimal@gmail.com",
        TP: "0773456789",
        gender: "Male",
        DOJ: "2023-11-20",
        departments: "Finance & Accounting",
        designations: "Accountant",
        types: "Permanent",
        salary: "220000"
    },

    {
        empName: "Sarah Fernando",
        email: "sarah@gmail.com",
        TP: "0774567890",
        gender: "Female",
        DOJ: "2024-08-12",
        departments: "Sales & Marketing",
        designations: "Digital Marketing Executive",
        types: "Trainee/Intern",
        salary: "80000"
    },

    {
        empName: "Kasun Jayasinghe",
        email: "kasun@gmail.com",
        TP: "0775678901",
        gender: "Male",
        DOJ: "2022-06-18",
        departments: "Legal, Security & Compliance",
        designations: "Cybersecurity Analyst",
        types: "Permanent",
        salary: "235000"
    },

    {
        empName: "Dilini Peris",
        email: "dilini@gmail.com",
        TP: "0776789012",
        gender: "Female",
        DOJ: "2024-10-10",
        departments: "Product & Engineering",
        designations: "UI/UX Designer",
        types: "Contract",
        salary: "175000"
    },

    {
        empName: "Tharindu Madushan",
        email: "tharindu@gmail.com",
        TP: "0777890123",
        gender: "Male",
        DOJ: "2025-02-01",
        departments: "Operations & HR",
        designations: "Administrative Specialist",
        types: "Trainee/Intern",
        salary: "90000"
    },

    {
        empName: "Kavindi Rodrigo",
        email: "kavindi@gmail.com",
        TP: "0778901234",
        gender: "Female",
        DOJ: "2023-04-22",
        departments: "Sales & Marketing",
        designations: "Customer Success Executive",
        types: "Permanent",
        salary: "185000"
    },

    {
        empName: "Chamara Wijesinghe",
        email: "chamara@gmail.com",
        TP: "0779012345",
        gender: "Male",
        DOJ: "2024-07-12",
        departments: "Finance & Accounting",
        designations: "Financial Analyst Specialist",
        types: "Contract",
        salary: "195000"
    },

    {
        empName: "Ashen Fernando",
        email: "ashen@gmail.com",
        TP: "0771122334",
        gender: "Male",
        DOJ: "2023-09-05",
        departments: "Legal, Security & Compliance",
        designations: "Legal Assistant",
        types: "Permanent",
        salary: "210000"
    }

];

localStorage.setItem(
    "employees",
    JSON.stringify(dummyEmployees)
);

displayEmployees();
updateDashboard();