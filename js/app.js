let department = document.getElementById("departments");
let designation = document.getElementById("designations");

department.onchange = function () {

    if (department.value == "ENG") {
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

    if (department.value == "SM") {
        designation.innerHTML = `
            <option>Select Designation</option>
            <option>Digital Marketing Executive</option>
            <option>Content & SEO Specialist</option>
            <option>Direct Sales Manager</option>
            <option>Customer Success Executive</option>
            `;
    }

    if (department.value == "ACC") {
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

    if (department.value == "HR") {
        designation.innerHTML = `
            <option>Select Designation</option>
            <option>HR Executive</option>
            <option>HR Specialist</option>
            <option>Project/Opeartions Executive</option>
            <option>Project/Operations/HR Manager</option>
            <option>Administrative Specialist</option>
            `;
    }

    if (department.value == "LGL") {
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

    if (phone.length !== 10) {

        banner.innerHTML = "Phone number must contain exactly 10 digits!";
        banner.style.color = "red";
        banner.style.display = "block";

        setTimeout(() => {
            banner.style.display = "none";
        }, 1500);

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

    banner.innerHTML = "Saved Successfully!";
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

    setTimeout(function () {

        banner.style.display = "none";

    }, 1500);

}

