// Create alert function here...
const setAlert = (msg,type = "danger") =>{
    return `<p class="mb-3 d-flex justify-content-between align-items-center alert alert-${type}">${msg} <button class="btn-close" data-bs-dismiss="alert"></button></p>`;
}

// Email validation here...
const emailValidation = (email) =>{
    const pattern = /^[a-zA-z0-9 !@#$%^&*().~]{5,20}@[a-z]{3,5}.[com|yhoo|io]{2,5}$/i;
    return pattern.test(email);
}

// Number Valication here...
const numberValidation = (number) =>{
    const pattern = /^[0-9]{2,10}$/i;
    return pattern.test(number)
}

// Set data in localStroage here...
const setLsData = (key,value) =>{
    localStorage.setItem(key, JSON.stringify(value));
}

// Get data from localStroage here...
const getLsData = (key) =>{
    // Use condition here...
    if (localStorage.getItem(key)) {
        return JSON.parse(localStorage.getItem(key))
    } else {
        return [];
    }
}

// Result grade function here...
const resultGrade = (data) =>{
    if (data <= 31) {
        return "F";
    } else if(data >= 33 && data <= 39) {
        return "D"
    } else if(data >= 40 && data <= 49) {
        return "C"
    } else if(data >= 50 && data <= 59) {
        return "B"
    } else if(data >= 60 && data <= 69) {
        return "A-"
    } else if(data >= 70 && data <= 79) {
        return "A"
    } else if(data >= 80 && data <= 100) {
        return "A+"
    }
}

// Result grade function here...
const resultGpa = (data) =>{
    if (data <= 31) {
        return 0;
    } else if(data >= 33 && data <= 39) {
        return 1;
    } else if(data >= 40 && data <= 49) {
        return 2;
    } else if(data >= 50 && data <= 59) {
        return 3;
    } else if(data >= 60 && data <= 69) {
        return 3.5;
    } else if(data >= 70 && data <= 79) {
        return 4;
    } else if(data >= 80 && data <= 100) {
        return 5;
    }
}

// Image preview functionality here...
const imageView = (value) =>{
    if (value == "https://i.ibb.co/Bt34sh7/student-avatar.jpg") {
        return `https://i.ibb.co/Bt34sh7/student-avatar.jpg`;
    } else {
        return value
    }
}
