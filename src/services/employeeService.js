const KEYS = {
    EMPLOYEES: "EMPLOYEES",
    EMPLOYEEID: "EMPLOYEEID",
};

export const getDepartmentCollection = () => [
    { id: "1", title: "Development" },
    { id: "2", title: "Marketing" },
    { id: "3", title: "Accounting" },
    { id: "4", title: "HR" },
];

export const insertEmployee = (data) => {
    let employees = getAllEmployees();
    data["id"] = generateEmployeeId();
    employees.push(data);
    localStorage.setItem(KEYS.EMPLOYEES, JSON.stringify(employees));
};

export const updateEmployee = (data) => {
    let employees = getAllEmployees();
    let recordIndex = employees.findIndex((x) => x.id == data.id);
    employees[recordIndex] = { ...data };
    localStorage.setItem(KEYS.EMPLOYEES, JSON.stringify(employees));
};

export const getAllEmployees = () => {
    if (localStorage.getItem(KEYS.EMPLOYEES) == null) {
        localStorage.setItem(KEYS.EMPLOYEES, JSON.stringify([]));
    }

    const departments = getDepartmentCollection();
    const employees = JSON.parse(localStorage.getItem(KEYS.EMPLOYEES));
    return employees.map((employee) => ({
        ...employee,
        department: departments[employee.departmentId - 1].title,
    }));
};

export const deleteEmployee = (id) => {
    let employees = getAllEmployees();
    employees = employees.filter((x) => x.id != id);
    localStorage.setItem(KEYS.EMPLOYEES, JSON.stringify(employees));
};

export const generateEmployeeId = () => {
    if (localStorage.getItem(KEYS.EMPLOYEEID) == null) {
        localStorage.setItem(KEYS.EMPLOYEEID, "0");
    }

    let id = parseInt(localStorage.getItem(KEYS.EMPLOYEEID));
    localStorage.setItem(KEYS.EMPLOYEEID, (++id).toString());
    return id;
};
