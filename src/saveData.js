export function saveData(data, setData, unixId, editorData, journalIdx) {
  // if you used that date in journal before
  if(data[journalIdx].content[unixId] || "content" in editorData.content[0]) {
    data[journalIdx].content[unixId] = editorData;
  }
  else {
    return;
  }
  // save data only if edtior is not empty.
  setData(data);
  localStorage.setItem('data', JSON.stringify(data))
}