type CSSUnit = "rem" | "px" | "em";

type CSSValue = `${number}${CSSUnit}`;

function setWidth(val: CSSValue): void {
  //
}

// setWidth(20)
// setWidth("px")
setWidth("20px");
