import "./Journal.css"
import { StyleInputsPanel } from "./StyleInputs/StyleInputsPanel";
import { useEditor, EditorContent } from "@tiptap/react"
import { useEffect, useState } from "react";
import StartKit from "@tiptap/starter-kit"
import TextAlign from "@tiptap/extension-text-align"
import Color from '@tiptap/extension-color'
import Highlight from '@tiptap/extension-highlight'
import { FontSize, TextStyle } from '@tiptap/extension-text-style'
import { saveData } from "../../saveData";
import { JournalSelector } from "./JournalSelector/JournalSelector";

export function Journal({ data, setData, unixId, journalIdx, setJournalIdx}) {

  let content = '';
  if(Object.keys(data).length > 0)
    content = data[journalIdx].content[unixId] ? data[journalIdx].content[unixId] : '';

  const [formattingInfo, setFormattingInfo] = useState({
    isBold: false,
    isItalic: false,
    isUnderline: false,
    isStrike: false,
    color: "#000000",
    backgroundColor: "#000000"
  });
  const editor = useEditor({
    extensions: [
      StartKit,
      TextStyle,
      FontSize,
      Color,
      Highlight.configure({
        multicolor: true
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph']
      })
    ],
    content: content,
    onUpdate: ({ editor }) => { updateFormatting(setFormattingInfo, editor); saveData(data, setData, unixId, editor.getJSON(), journalIdx) },
    onSelectionUpdate: ({ editor }) => { updateFormatting(setFormattingInfo, editor); saveData(data, setData, unixId, editor.getJSON(), journalIdx) },
    onTransaction: ({ editor }) => { updateFormatting(setFormattingInfo, editor); saveData(data, setData, unixId, editor.getJSON(), journalIdx) }
  });
  useEffect(() => {
    editor.commands.setContent(content);
  }, [unixId, journalIdx])

  if (!editor)
    return null;

  return (
    <div className="journal-container">
        <JournalSelector data={data} setData={setData} journalIdx={journalIdx} setJournalIdx={setJournalIdx}/>
      <div className="journal-styling">
        <div className="journal-content-container">
          <StyleInputsPanel formattingInfo={formattingInfo} setFormattingInfo={setFormattingInfo} editor={editor} />
          <EditorContent editor={editor} className="journal-text-input" />
        </div>
      </div>
    </div>
  );
}
function updateFormatting(setFormattingInfo, editor) {
  const newFormattingInfo = {
    isBold: editor.isActive("bold"),
    isItalic: editor.isActive("italic"),
    isUnderline: editor.isActive("underline"),
    isStrike: editor.isActive("strike"),
    color: editor.getAttributes('textStyle').color,
    backgroundColor: editor.getAttributes('highlight').color
  }
  setFormattingInfo(newFormattingInfo);
}
