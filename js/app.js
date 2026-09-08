let department = document.getElementById("departments");
let designation = document.getElementById("designations");

let editingIndex = null;

department.onchange = function () {

    if (department.value == "Product & Engineering") {
        designation.innerHTML = `
            <option>Select Designation</option>
            <option>Full-Stack Developer</option>
            <option>Frontend Engineer</option>
            <option>Backend Engineer</option>
            <option>UI/UX Designer</option>
            <option>AI/ML Engineer</option>
            <option>QA (Quality Assurance) Engineer</option>
            `;
    }

    if (department.value == "Sales & Marketing") {
        designation.innerHTML = `
            <option>Select Designation</option>
            <option>Digital Marketing Executive</option>
            <option>Content & SEO Specialist</option>
            <option>Direct Sales Manager</option>
            <option>Customer Success Executive</option>
            `;
    }

    if (department.value == "Finance & Accounting") {
        designation.innerHTML = `
            <option>Select Designation</option>
            <option>Accounts Clerk</option>
            <option> Accounts Executive </option>
            <option> Billing Specialist</option>
            <option>Payroll Executive</option>
            <option>Financial Analyst Specialist</option>
            <option>Accountant</option>
            `;
    }

    if (department.value == "Operations & HR") {
        designation.innerHTML = `
            <option>Select Designation</option>
            <option>HR Executive</option>
            <option>HR Specialist</option>
            <option>Project/Opeartions Executive</option>
            <option>Project/Operations/HR Manager</option>
            <option>Administrative Specialist</option>
            `;
    }

    if (department.value == "Legal, Security & Compliance") {
        designation.innerHTML = `
            <option>Select Designation</option>
            <option>Legal Assistant</option>
            <option>Legal/Compliance  Specialist</option>
            <option>Cybersecurity Analyst</option>
            <option>General Counsel</option>
            `;
    }

};

function saveEmployee() {

    console.log("Current editing index:", editingIndex);

    let banner = document.getElementById("successBanner");


    if (
        document.getElementById("empName").value.trim() === "" ||
        document.getElementById("email").value.trim() === "" ||
        document.getElementById("TP").value.trim() === "" ||
        document.getElementById("gender").value === "" ||
        document.getElementById("DOJ").value === "" ||
        document.getElementById("departments").value === "" ||
        document.getElementById("designations").value === "" ||
        document.getElementById("types").value === "" ||
        document.getElementById("salary").value.trim() === ""
    ) {

        banner.innerHTML = "Please fill all fields";
        banner.style.color = "red";
        banner.style.display = "block";

        setTimeout(() => {
            banner.style.display = "none";
        }, 1500);

        return;
    }

    let phone = document.getElementById("TP").value;

    if (phone.length < 10) {

        banner.innerHTML = "Phone number cannot be less than 10 digits";
        banner.style.display = "block";
        banner.style.color = "red";
        return;
    }

    if (phone.length > 10) {

        banner.innerHTML = "Phone number cannot exceed 10 digits";
        banner.style.display = "block";
        banner.style.color = "red";
        return;
    }

    if (!phone.startsWith("07")) {

        banner.innerHTML = "Phone number must start with 07";
        banner.style.display = "block";
        banner.style.color = "red";
        return;
    }

    const employee = {
        empName: document.getElementById("empName").value,
        email: document.getElementById("email").value,
        TP: phone,
        gender: document.getElementById("gender").value,
        DOJ: document.getElementById("DOJ").value,
        departments: document.getElementById("departments").value,
        designations: document.getElementById("designations").value,
        types: document.getElementById("types").value,
        salary: document.getElementById("salary").value,
    }

    console.log(employee);
    let employees =
        JSON.parse(localStorage.getItem("employees")) || [];


    console.log("Saving. editingIndex =", editingIndex);

    if (editingIndex == null) {

        // Add a new employee
        employees.push(employee);

        banner.innerHTML = "Saved Successfully!";

    } else {

        // Update the selected employee
        employees[editingIndex] = employee;

        banner.innerHTML = "Updated Successfully!";

        editingIndex = null;

        document.getElementById("saveButton").innerText =
            "Save Employee";
    }

    banner.style.color = "green";
    banner.style.display = "block";

    setTimeout(() => {
        banner.style.display = "none";
    }, 1500);

    document.getElementById("empName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("TP").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("DOJ").value = "";
    document.getElementById("departments").value = "";
    document.getElementById("designations").innerHTML =
        '<option value="">Select Designation</option>';
    document.getElementById("types").value = "";
    document.getElementById("salary").value = "";

    banner.style.display = "block";

    localStorage.setItem(
        "employees",
        JSON.stringify(employees)

    );

    displayEmployees();
    updateDashboard();

}

function displayEmployees() {

    let employees =
        JSON.parse(localStorage.getItem("employees")) || [];

    console.log(employees);

    let tableBody =
        document.getElementById("employeeTableBody");

    tableBody.innerHTML = "";

    employees.forEach((emp, index) => {

        let rowClass = "";

        if (emp.departments === "Product & Engineering") {
            rowClass = "eng-row";
        }
        else if (emp.departments === "Sales & Marketing") {
            rowClass = "sales-row";
        }
        else if (emp.departments === "Finance & Accounting") {
            rowClass = "finance-row";
        }
        else if (emp.departments === "Operations & HR") {
            rowClass = "hr-row";
        }
        else if (emp.departments === "Legal, Security & Compliance") {
            rowClass = "legal-row";
        }

        tableBody.innerHTML += `
        <tr>
            <td>${emp.empName}</td>

            <td>
                ${emp.email}<br>
                ${emp.TP}
            </td>

            <td>${emp.gender}</td>

            <td>${emp.DOJ}</td>

            <td class="department-cell ${rowClass}">
                ${emp.departments}
            </td>

            <td>${emp.designations}</td>

            <td>${emp.types}</td>

            <td>${emp.salary}</td>

            <td class="action-cell">
                
                <button
                    class="edit-btn"
                    onclick="editEmployee(${index})">
                    Edit
                </button>

                <button
                    class="delete-btn"
                    onclick="deleteEmployee(${index})">
                    Delete
                </button>
            </td>

        </tr>
        `;
    });

}

displayEmployees();
updateDashboard();

function updateDashboard() {

    let employees =
        JSON.parse(localStorage.getItem("employees")) || [];

    document.getElementById("totalEmployees").innerHTML =
        employees.length;

    let departments =
        [...new Set(employees.map(emp => emp.departments))];

    document.getElementById("totalDepartments").innerHTML =
        departments.length;

    let permanentCount =
        employees.filter(emp =>
            emp.types === "Permanent"
        ).length;

    document.getElementById("permanentEmployees").innerHTML =
        permanentCount;

    let contractCount =
        employees.filter(emp =>
            emp.types === "Contract"
        ).length;

    document.getElementById("contractEmployees").innerHTML =
        contractCount;

    let traineeCount =
        employees.filter(emp =>
            emp.types === "Trainee/Intern"
        ).length;

    document.getElementById("traineeEmployees").innerHTML =
        traineeCount;

    let totalSalary =
        employees.reduce(
            (sum, emp) =>
                sum + Number(emp.salary),
            0
        );

    let averageSalary =
        employees.length > 0
            ? Math.round(totalSalary / employees.length)
            : 0;

    document.getElementById("averageSalary").innerHTML =
        "Rs. " + averageSalary.toLocaleString();
}

function deleteEmployee(index) {

    let answer = confirm(
        "Are you sure you want to delete this employee?"
    );

    if (answer) {

        let employees =
            JSON.parse(localStorage.getItem("employees")) || [];

        employees.splice(index, 1);

        localStorage.setItem(
            "employees",
            JSON.stringify(employees)
        );

        displayEmployees();
        updateDashboard();   // ← add this
    }
}

function editEmployee(index) {

    let employees =
        JSON.parse(localStorage.getItem("employees")) || [];

    let employee = employees[index];

    editingIndex = Number(index);

    console.log("Edit clicked:", editingIndex);

    document.getElementById("empName").value =
        employee.empName;

    document.getElementById("email").value =
        employee.email;

    document.getElementById("TP").value =
        employee.TP;

    document.getElementById("gender").value =
        employee.gender;

    document.getElementById("DOJ").value =
        employee.DOJ;

    document.getElementById("departments").value =
        employee.departments;

    // Load the correct designations for that department
    department.onchange();

    document.getElementById("designations").value =
        employee.designations;

    document.getElementById("types").value =
        employee.types;

    document.getElementById("salary").value =
        employee.salary;

    document.getElementById("saveButton").innerText =
        "Update Employee";

    // Move to the form
    document.querySelector("form").scrollIntoView({
        behavior: "smooth"
    });
}