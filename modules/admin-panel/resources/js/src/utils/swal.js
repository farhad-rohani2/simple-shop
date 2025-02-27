import Swal from "sweetalert2";

const showSuccess = (message = "Operation successful") => {
    return Swal.fire({
        position: "center",
        icon: "success",
        title: message,
        showConfirmButton: false,
        timer: 1500,
    });
};

const showError = (message = "An error occurred", error = "") => {
    return Swal.fire({
        position: "center",
        icon: "error",
        title: message,
        text: error,
        showConfirmButton: false,
        timer: 1500,
    });
};

export { showSuccess, showError };
