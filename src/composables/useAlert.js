import Swal from "sweetalert2";

//Alert Icons
//success
//error
//warning
//info
//question

export const useAlert = () => {

  const timerToast = Swal.mixin({
    toast: true,
    icon: 'success',
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  const timerAlert = Swal.mixin({
    toast: false,
    position: "top",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  const confirmAlert = Swal.mixin({
    showCancelButton: true,
    cancelButtonText: "Cancelar",
    confirmButtonText: "Si",
    reverseButtons: true,
  });

  const okAlert = Swal.mixin({
    showCancelButton: false,
    confirmButtonText: "OK",
  });


  return {
    timerToast,
    timerAlert,
    confirmAlert,
    okAlert,    
  };
};

