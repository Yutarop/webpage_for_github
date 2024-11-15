function copyCode() {
    const codeBlock = document.getElementById("gitCommand").innerText;
    const textarea = document.createElement("textarea");
    textarea.value = codeBlock;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("COPY！");
}