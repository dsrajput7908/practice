var myForm=document.querySelector('#myForm')
function validate(){
    if(myForm.fisrstname.value==""){
        alert("Fisrstname is required")
        myForm.fisrstname.focus()
        return false
    }
    if(myForm.lastname.value==""){
        alert("Lastname is required")
        myForm.lastname.focus()
        return false
    }
    if(myForm.emailAdd.value==""){
        alert("Email Address is required")
        myForm.emailAdd.focus()
        return false
    }
    if(myForm.mobile.value==""){
        alert("Mobile No is required")
        myForm.mobile.focus()
        return false
    }
    if(myForm.address.value==""){
        alert("Address is required")
        myForm.address.focus()
        return false
    }
    if(myForm.department.value==""){
        alert("Department is required")
        myForm.department.focus()
        return false
    }
    if(myForm.gender.value==""){
        alert("Gender is required")
        myForm.gender.focus()
        return false
    }
}