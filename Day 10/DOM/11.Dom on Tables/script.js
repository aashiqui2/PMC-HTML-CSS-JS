let t = document.body.firstElementChild.firstElementChild
console.log(t)
console.log(t.rows)
console.log(t.caption)
console.log(t.tHead)
console.log(t.tHead.firstElementChild)
console.log(t.tBodies)
console.log(t.tFoot)
console.log(t.rows[0])
console.log(t.rows[1].cells)//collection of td and th
console.log(t.rows[5].sectionRowIndex) //index of tr inside enclosing element such as <thead> <tfoot>
console.log(t.rows[4].rowIndex)// return the index of tr