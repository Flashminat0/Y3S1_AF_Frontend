import React from "react";
import TagsInput from "./TagsInput";

function input() {
  function handleSelecetedTags(items) {
    console.log(items);
  }
  return (
    <div className="App">
      <TagsInput
        selectedTags={handleSelecetedTags}
        fullWidth
        variant="outlined"
        id="tags"
        name="tags"
        placeholder="add Tags"
        label="tags"
      />
    </div>
  );
}
export default input;
