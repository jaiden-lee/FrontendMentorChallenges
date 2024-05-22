const stat = {}
let successVis = false;

function validateTextField(id) {
    const el = document.getElementById(id);
    if (!(id in stat)) {
        stat[id] = true;
        el.classList.add("error");
    }
}

function processForm() {
    const el = document.getElementById("success");
    if (!successVis) {
        successVis = true;
        el.classList.add("success");
        setTimeout(()=>{
            if (successVis) {
                successVis = false;
                el.classList.remove("success");
            }
        }, 5000);
    }
    const form = document.getElementById("form");
    form.reset();
    for (let key in stat) {
        document.getElementById(key).classList.remove('error');
        delete stat[key];
    }
}