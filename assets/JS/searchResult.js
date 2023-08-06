// Get tag here...
const search_student_form = document.getElementById("search_student_form");
const searchResultModal = document.getElementById("searchResultModal");
const showFinalResult = document.getElementById("showFinalResult");
const search_alert = document.querySelector(".search_alert");
if (search_student_form) {
    search_student_form.onsubmit = (e) =>{
        e.preventDefault();

        // Manage from data here...
        const data = new FormData(e.target)
        const formData = Object.fromEntries(data.entries());

        // Data distructre here...
        const {roll,reg} = formData;

        // Validation here...
        if (!roll || !reg) {
            search_alert.innerHTML = setAlert("All fields are required!", "danger")
        } else if(!numberValidation(roll)){
            search_alert.innerHTML = setAlert("Invalid Roll Type! It will be a Number.")
        } else if(!numberValidation(reg)){
            search_alert.innerHTML = setAlert("Invalid Reg Type! It will be a Number.")
        }else{

            // Get all data here...
            const allStudents = getLsData("students");

            // get single student here...
            // const singleStudentreg = allStudents.find(data => data.reg == reg);
            
            if (allStudents.find(data=> data.roll == roll)) {
                const singleStudent = allStudents.find(data => data.roll == roll);

                // Using condition here...
                if (singleStudent.roll == roll && singleStudent.reg == reg) {
                    const {name,photo,reg} = singleStudent;

                    // Subject here..
                    let bangla = singleStudent.result[0].bangla
                    let english = singleStudent.result[0].english
                    let math = singleStudent.result[0].math
                    let physics = singleStudent.result[0].physics
                    let chemistry = singleStudent.result[0].chemistry
                    let religion = singleStudent.result[0].religion
    
                    // const get gpa mark here...
                    const gpaGrade = () =>{
                        return resultGpa(bangla) + resultGpa(english) + resultGpa(math) + resultGpa(physics) + resultGpa(chemistry) + resultGpa(religion)
                    }
                    // Pass fail function here...
                    const passFaildResult = () =>{
                        if (resultGrade(bangla) == "F" || resultGrade(english) == "F" || resultGrade(math) == "F" || resultGrade(physics) == "F" || resultGrade(chemistry) == "F" || resultGrade(religion) == "F") {
                            return `<button class="btn btn-danger">Faild</button>`
                        }else{
                            return `<button class="btn btn-success">Passed</button>`
                        }
                    }
    
                    // Open modal here...
                    searchResultModal.click();
                    
                    // View final result here...
                    showFinalResult.innerHTML = `
                        <div class="student_info_table mt-2">
                                <table class="table table-responsive table-bordered">
                                  <tbody class="align-middle position-relative">
                                    <tr>
                                      <td>1</td>
                                      <td>Student of Name</td>
                                      <td>${name}</td>
                                      <td rowspan="5" style="text-align: right;"><img src="${photo}" alt=""></td>
                                    </tr>
                                    <tr>
                                      <td>2</td>
                                      <td>Roll</td>
                                      <td>${singleStudent.roll}</td>
                                    </tr>
                                    <tr>
                                      <td>3</td>
                                      <td>Reg:</td>
                                      <td>${reg}</td>
                                    </tr>
                                    <tr>
                                      <td>4</td>
                                      <td>Result</td>
                                      <td>${passFaildResult()}</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>GPA</td>
                                        <td>${(gpaGrade() / 6).toFixed(2)}</td>
                                    </tr>
                                  </tbody>
                                </table>
                            </div>
                            <div class="result_gread_sheet">
                            <h3 class="mb-2 text-center mx-auto" style="text-decoration: underline; width: fit-content;">Mark Sheet</h3>
                            <table class="table table-bordered table-responsive table-stripedr">
                                <thead>
                                <tr>
                                    <th>Code</th>
                                    <th>Subject</th>
                                    <th>Mark</th>
                                    <th>Grade</th>
                                    <th>Final Result</th>
                                </tr>
                                </thead>
                                <tbody class="align-middle">
                                <tr>
                                    <td>1</th>
                                    <td>Bangla</td>
                                    <td>${bangla}</td>
                                    <td>${resultGrade(bangla)}</td>
                                    <td rowspan="6" style="text-align: center;">${passFaildResult()}</td>
                                </tr>
                                <tr>
                                    <td>2</th>
                                    <td>English</td>
                                    <td>${english}</td>
                                    <td>${resultGrade(english)}</td>
                                </tr>
                                <tr>
                                    <td>3</th>
                                    <td>Mathmatics</td>
                                    <td>${math}</td>
                                    <td>${resultGrade(math)}</td>
                                </tr>
                                <tr>
                                    <td>4</th>
                                    <td>Physics</td>
                                    <td>${physics}</td>
                                    <td>${resultGrade(physics)}</td>
                                </tr>
                                <tr>
                                    <td>5</th>
                                    <td>Chemistry</td>
                                    <td>${chemistry}</td>
                                    <td>${resultGrade(chemistry)}</td>
                                </tr>
                                <tr>
                                    <td>6</th>
                                    <td>Religion</td>
                                    <td>${religion}</td>
                                    <td>${resultGrade(religion)}</td>
                                </tr>
                                </tbody>
                            </table>
                            </div>
                    `; 
                }else if(singleStudent.result === null){
                    showFinalResult.innerHTML = `<p class="m-0 text-center" style="font-size: 20px;">Student Not Found</p>`
                    searchResultModal.click();
                }else{
                    searchResultModal.click();
                    showFinalResult.innerHTML = `<p class="m-0 text-center" style="font-size: 20px;">Student Not Found</p>`
                }
            }

            if (allStudents.find(data=> data.reg == reg)) {
                const singleStudent = allStudents.find(data => data.reg == reg);

                // Using condition here...
                if (singleStudent.roll == roll && singleStudent.reg == reg) {
                    const {name,photo,reg} = singleStudent;

                    // Subject here..
                    let bangla = singleStudent.result[0].bangla
                    let english = singleStudent.result[0].english
                    let math = singleStudent.result[0].math
                    let physics = singleStudent.result[0].physics
                    let chemistry = singleStudent.result[0].chemistry
                    let religion = singleStudent.result[0].religion
    
                    // const get gpa mark here...
                    const gpaGrade = () =>{
                        return resultGpa(bangla) + resultGpa(english) + resultGpa(math) + resultGpa(physics) + resultGpa(chemistry) + resultGpa(religion)
                    }
                    // Pass fail function here...
                    const passFaildResult = () =>{
                        if (resultGrade(bangla) == "F" || resultGrade(english) == "F" || resultGrade(math) == "F" || resultGrade(physics) == "F" || resultGrade(chemistry) == "F" || resultGrade(religion) == "F") {
                            return `<button class="btn btn-danger">Faild</button>`
                        }else{
                            return `<button class="btn btn-success">Passed</button>`
                        }
                    }
    
                    // Open modal here...
                    searchResultModal.click();
                    
                    // View final result here...
                    showFinalResult.innerHTML = `
                        <div class="student_info_table mt-2">
                                <table class="table table-responsive table-bordered">
                                  <tbody class="align-middle position-relative">
                                    <tr>
                                      <td>1</td>
                                      <td>Student of Name</td>
                                      <td>${name}</td>
                                      <td rowspan="5" style="text-align: right;"><img src="${photo}" alt=""></td>
                                    </tr>
                                    <tr>
                                      <td>2</td>
                                      <td>Roll</td>
                                      <td>${singleStudent.roll}</td>
                                    </tr>
                                    <tr>
                                      <td>3</td>
                                      <td>Reg:</td>
                                      <td>${reg}</td>
                                    </tr>
                                    <tr>
                                      <td>4</td>
                                      <td>Result</td>
                                      <td>${passFaildResult()}</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>GPA</td>
                                        <td>${(gpaGrade() / 6).toFixed(2)}</td>
                                    </tr>
                                  </tbody>
                                </table>
                            </div>
                            <div class="result_gread_sheet">
                            <h3 class="mb-2 text-center mx-auto" style="text-decoration: underline; width: fit-content;">Mark Sheet</h3>
                            <table class="table table-bordered table-responsive table-stripedr">
                                <thead>
                                <tr>
                                    <th>Code</th>
                                    <th>Subject</th>
                                    <th>Mark</th>
                                    <th>Grade</th>
                                    <th>Final Result</th>
                                </tr>
                                </thead>
                                <tbody class="align-middle">
                                <tr>
                                    <td>1</th>
                                    <td>Bangla</td>
                                    <td>${bangla}</td>
                                    <td>${resultGrade(bangla)}</td>
                                    <td rowspan="6" style="text-align: center;">${passFaildResult()}</td>
                                </tr>
                                <tr>
                                    <td>2</th>
                                    <td>English</td>
                                    <td>${english}</td>
                                    <td>${resultGrade(english)}</td>
                                </tr>
                                <tr>
                                    <td>3</th>
                                    <td>Mathmatics</td>
                                    <td>${math}</td>
                                    <td>${resultGrade(math)}</td>
                                </tr>
                                <tr>
                                    <td>4</th>
                                    <td>Physics</td>
                                    <td>${physics}</td>
                                    <td>${resultGrade(physics)}</td>
                                </tr>
                                <tr>
                                    <td>5</th>
                                    <td>Chemistry</td>
                                    <td>${chemistry}</td>
                                    <td>${resultGrade(chemistry)}</td>
                                </tr>
                                <tr>
                                    <td>6</th>
                                    <td>Religion</td>
                                    <td>${religion}</td>
                                    <td>${resultGrade(religion)}</td>
                                </tr>
                                </tbody>
                            </table>
                            </div>
                    `; 
                }else if(singleStudent.result === null){
                    showFinalResult.innerHTML = `<p class="m-0 text-center" style="font-size: 20px;">Student Not Found</p>`
                    searchResultModal.click();
                }else{
                    searchResultModal.click();
                    showFinalResult.innerHTML = `<p class="m-0 text-center" style="font-size: 20px;">Student Not Found</p>`
                }
            }
        }
        e.target.reset();
    }
}
