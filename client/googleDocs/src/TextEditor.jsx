import "quill/dist/quill.snow.css"
import { useCallback, } from "react"
import Quill from "quill"

function TextEditor() {

    const wrapperRef = useCallback((wrapper) => {
        
        if (wrapper==null) return 
        wrapper.innerHTML = ""
        const editor = document.createElement("div")
        wrapper.append(editor)
        new Quill(editor, { theme: "snow" })
    },
        [])
    return (
        <div id="container" ref={wrapperRef}> </div>
    )
}

export default TextEditor