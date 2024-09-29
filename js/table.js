import "../css/style.css";

const data = [
  {
    ChemicalName: "Sodium Hydroxide",
    Vendor: "ChemCo Ltd.",
    Density: "2.13 ",
    Viscosity: "78 ",
    Packaging: "Drum",
    PackSize: 50,
    Unit: "kg",
    Quantity: 10,
  },
  {
    ChemicalName: "Acetic Acid",
    Vendor: "LabSupplies Inc.",
    Density: "1.05 ",
    Viscosity: "1.22 ",
    Packaging: "Bottle",
    PackSize: 1,
    Unit: "L",
    Quantity: 25,
  },
  {
    ChemicalName: "Benzene",
    Vendor: "ChemTrade Ltd.",
    Density: "0.87 ",
    Viscosity: "0.65 ",
    Packaging: "Canister",
    PackSize: 20,
    Unit: "L",
    Quantity: 5,
  },
  {
    ChemicalName: "Ethanol",
    Vendor: "BioChem Corp.",
    Density: "0.789 ",
    Viscosity: "1.2 ",
    Packaging: "Bottle",
    PackSize: 5,
    Unit: "L",
    Quantity: 40,
  },
  {
    ChemicalName: "Hydrogen Peroxide",
    Vendor: "Reagent Supplies",
    Density: "1.45 ",
    Viscosity: "1.245 ",
    Packaging: "Bottle",
    PackSize: 2,
    Unit: "L",
    Quantity: 30,
  },
  {
    ChemicalName: "Sulfuric Acid",
    Vendor: "Industrial Chem.",
    Density: "1.84 ",
    Viscosity: "26.7 ",
    Packaging: "Drum",
    PackSize: 100,
    Unit: "kg",
    Quantity: 8,
  },
  {
    ChemicalName: "Ammonium Nitrate",
    Vendor: "Agro Chemicals",
    Density: "1.725 ",
    Viscosity: "1.2 ",
    Packaging: "Bag",
    PackSize: 25,
    Unit: "kg",
    Quantity: 15,
  },
  {
    ChemicalName: "Methanol",
    Vendor: "PureChem Ltd.",
    Density: "0.792 ",
    Viscosity: "0.59 ",
    Packaging: "Bottle",
    PackSize: 1,
    Unit: "L",
    Quantity: 50,
  },
  {
    ChemicalName: "Phosphoric Acid",
    Vendor: "Chem Solutions",
    Density: "1.685 ",
    Viscosity: "3.38 ",
    Packaging: "Canister",
    PackSize: 20,
    Unit: "L",
    Quantity: 10,
  },
  {
    ChemicalName: "Calcium Chloride",
    Vendor: "Minera Chem",
    Density: "2.15 ",
    Viscosity: "1.5 ",
    Packaging: "Bag",
    PackSize: 25,
    Unit: "kg",
    Quantity: 20,
  },
];

const tableheader = document.getElementById("table-head");
const tablebody = document.getElementById("table-body");

const headers = [
  '<span class="material-symbols-outlined">check</span>',
  "Chemical Name",
  "Vendor",
  "Density g/m³",
  "Viscosity m²/s ",
  "Packaging",
  "Pack Size",
  "Unit",
  "Quantity",
];

let selectedRowIndex = -1;
let isEditing = false;
let currentEditingCell = null;
let isModified = false;

const saveButton = document.querySelector(".save");

saveButton.disabled = true;
saveButton.style.cursor = "not-allowed";

// Create table header
const tr = document.createElement("tr");
headers.forEach((headerKey) => {
  const th = document.createElement("th");
  th.innerHTML = headerKey;
  th.style.width = "10%";
  tr.appendChild(th);
});
tableheader.appendChild(tr);

function loadTableData() {
  tablebody.innerHTML = "";

  data.forEach((dataKey, index) => {
    const tr = document.createElement("tr");

    const tdCheck = document.createElement("td");
    tdCheck.innerHTML = '<span class="material-symbols-outlined">check</span>';
    tr.appendChild(tdCheck);

    Object.values(dataKey).forEach((key, i) => {
      const td = document.createElement("td");
      td.innerText = key;
      td.style.width = "20%";
      tr.appendChild(td);

      td.addEventListener("dblclick", (event) => {
        event.stopPropagation();
        editCell(td, index, i);
      });
    });

    // Add event listener to select the row when clicked
    tr.addEventListener("click", () => selectRow(index));
    tablebody.appendChild(tr);

    // Highlight the selected row
    if (index === selectedRowIndex) {
      tr.classList.add("selected");
    }
  });
}

// Select row by clicking
function selectRow(index) {
  const rows = document.querySelectorAll("tbody tr");
  rows.forEach((row) => row.classList.remove("selected"));
  rows[index].classList.add("selected");
  selectedRowIndex = index;
}

// Move selected row up
document.querySelector(".upward").addEventListener("click", () => {
  if (selectedRowIndex > 0 && selectedRowIndex < data.length) {
    [data[selectedRowIndex - 1], data[selectedRowIndex]] = [
      data[selectedRowIndex],
      data[selectedRowIndex - 1],
    ];
    selectedRowIndex--;
    loadTableData();
  }
});

// Move selected row down
document.querySelector(".downward").addEventListener("click", () => {
  if (selectedRowIndex >= 0 && selectedRowIndex < data.length - 1) {
    [data[selectedRowIndex + 1], data[selectedRowIndex]] = [
      data[selectedRowIndex],
      data[selectedRowIndex + 1],
    ];
    selectedRowIndex++;
    loadTableData();
    markAsModified();
  }
});

// Delete row functionality
document.querySelector(".delete").addEventListener("click", () => {
  if (selectedRowIndex >= 0 && selectedRowIndex < data.length) {
    data.splice(selectedRowIndex, 1);
    selectedRowIndex = -1;
    loadTableData();
    markAsModified();
  }
});

// Replay button reloads the table data
document.querySelector(".replay").addEventListener("click", () => {
  loadTableData();
  resetModification();
});

// Save button displays a message
saveButton.addEventListener("click", () => {
  if (isModified) {
    alert("Data saved successfully!");
    resetModification();
  }
});

// Add row functionality
document.querySelector(".circle").addEventListener("click", () => {
  const newRow = {
    ChemicalName: "New Chemical",
    Vendor: "New Vendor",
    Density: 0,
    Viscosity: 0,
    Packaging: "New Packaging",
    PackSize: 0,
    Unit: "kg",
    Quantity: 0,
  };
  data.push(newRow);
  loadTableData();
  markAsModified();
});

// Edit specific cell
function editCell(cell, rowIndex, cellIndex) {
  if (isEditing) {
    alert("Finish the current edit before editing another cell.");
    return;
  }

  const chemical = data[rowIndex];
  const input = document.createElement("input");
  input.type =
    typeof chemical[Object.keys(chemical)[cellIndex]] === "number"
      ? "number"
      : "text";
  input.value = chemical[Object.keys(chemical)[cellIndex]];
  input.style.width = "90%";
  input.style.padding = "5px";
  cell.innerHTML = "";
  cell.appendChild(input);
  input.focus();
  input.addEventListener("blur", () =>
    saveCell(input.value, rowIndex, cellIndex, cell)
  );
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      saveCell(input.value, rowIndex, cellIndex, cell); // Save on Enter key
    }
  });

  isEditing = true;
  currentEditingCell = input;
}

// Save edited cell value
function saveCell(value, rowIndex, cellIndex, cell) {
  const chemical = data[rowIndex];

  if (cellIndex === 1) {
    if (!/^[A-Za-z\s]+$/.test(value)) {
      alert("Vendor must contain only letters.");
      return; // Prevent saving invalid value
    }
    chemical.Vendor = value;
  } else if (cellIndex === 2) {
    chemical.Density = value;
  } else if (cellIndex === 3) {
    chemical.Viscosity = value;
  } else if (cellIndex === 4) {
    if (!/^[A-Za-z\s]+$/.test(value)) {
      alert("Packaging must contain only letters.");
      return;
    }
    chemical.Packaging = value;
  } else if (cellIndex === 5) {
    if (isNaN(value) || value.trim() === "") {
      alert("Pack Size must be a valid number.");
      return;
    }
    chemical.PackSize = parseFloat(value);
  } else if (cellIndex === 6) {
    if (!/^[A-Za-z\s]+$/.test(value)) {
      alert("Unit must contain only letters.");
      return;
    }
    chemical.Unit = value;
  } else if (cellIndex === 7) {
    if (!Number.isInteger(Number(value))) {
      alert("Quantity must be a valid integer.");
      return;
    }
    chemical.Quantity = parseInt(value);
  }

  cell.innerText = value;
  isEditing = false;
  currentEditingCell = null;
  markAsModified();
}

function markAsModified() {
  isModified = true;
  saveButton.disabled = false;
  saveButton.style.cursor = "pointer";
}

// Reset modification state
function resetModification() {
  isModified = false;
  saveButton.disabled = true;
  saveButton.style.cursor = "not-allowed";
}

let sortDirection = true; // Track sorting direction (true = ascending, false = descending)

function sortTableByColumn(columnIndex) {
  const dataKeyMap = [
    "ChemicalName",
    "Vendor",
    "Density",
    "Viscosity",
    "Packaging",
    "PackSize",
    "Unit",
    "Quantity",
  ];
  const key = dataKeyMap[columnIndex - 1];

  data.sort((a, b) => {
    const aValue = a[key];
    const bValue = b[key];

    if (typeof aValue === "string") {
      return sortDirection
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    } else {
      return sortDirection ? aValue - bValue : bValue - aValue;
    }
  });

  loadTableData();
}

document.querySelectorAll("th").forEach((header, index) => {
  if (index > 0) {
    header.addEventListener("click", () => sortTableByColumn(index));
  }
});

loadTableData();
