import { ToastContainer, toast } from "react-toastify";

function copyToClipboard(copyText: any) {
    navigator.clipboard.writeText(copyText).then(
        () => {
            toast.success("Cope Copied", {
                theme: "colored",
                autoClose: 1500,
            });
        },
        (err) => {
            console.error("Failed to copy text: ", err);
        }
    );
}

export function makeCodeBlock() {
    const codeBlocks = document.querySelectorAll("pre");

    codeBlocks.forEach((element) => {
        // Checking if the button already exists
        if (!element.querySelector(".copyBtn")) {
            const copyBtn = document.createElement("button");
            copyBtn.innerText = "Copy code";
            copyBtn.setAttribute("class", "copyBtn");
            copyBtn.setAttribute("type", "button");
            element.prepend(copyBtn);

            let copyText = element.textContent;
            copyBtn.addEventListener("click", () => copyToClipboard(copyText));
        }
    });
}
