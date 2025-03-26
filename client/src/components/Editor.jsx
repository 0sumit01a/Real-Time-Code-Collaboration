import React, { useEffect, useRef } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/theme/dracula.css";
import "codemirror/addon/edit/closetag";
import "codemirror/addon/edit/closebrackets";
import CodeMirror from "codemirror";

const Editor = () => {
  const editorRef = useRef(null);

  useEffect(() => {
    if (!editorRef.current) return;

    const editor = CodeMirror.fromTextArea(editorRef.current, {
      mode: { name: "javascript", json: true },
      theme: "dracula",
      autoCloseTags: true,
      autoCloseBrackets: true,
      lineNumbers: true,
    });

    // Ensure the editor takes full height
    editor.setSize("100%", "calc(100vh - 10px)"); // Adjust height dynamically

    return () => {
      editor.toTextArea(); // Clean up to prevent duplicate instances
    };
  }, []);

  return (
    <div style={{ height: "calc(100vh - 50px)", width: "100%" }}>
      <textarea ref={editorRef}></textarea>
    </div>
  );
};

export default Editor;
