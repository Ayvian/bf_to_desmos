function convert() {
    document.getElementById("input").focus();
    var bf = document.getElementById("input").value;
    var output = document.getElementById("output")
    var desmos_list = "P_{rogram}=\\left["
    for (let i = 0; i < bf.length; i++) {
        j = bf.charAt(i);
        if (j === "<") {desmos_list += "1"}
        if (j === ">") {desmos_list += "2"}
        if (j === "+") {desmos_list += "3"}
        if (j === "-") {desmos_list += "4"}
        if (j === ",") {desmos_list += "5"}
        if (j === ".") {desmos_list += "6"}
        if (j === "[") {desmos_list += "7"}
        if (j === "]") {desmos_list += "8"}
        if (i+1 != bf.length) { desmos_list += ","}
    }
    desmos_list += "\\right]";
    console.log(desmos_list);
    output.value = desmos_list;
}