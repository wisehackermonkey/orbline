let convert_lines_into_rows = (text) => {
    return text.split("\n")
    // used to remove empty lines        
    .filter((row)=> row.trim() !== "");
}

let is_indented_line = (line) => {
    // regexr.com/6ddds
    return /^([\t]|[\s]{4})+/g.test(line)
}

let get_indent_level = (line) => {
    // regexr.com/6ddeb
    let isolated_indents = line.match(/^([\t]|[\s]{4})+([\s]{1,4})?(?=[^])/g)
    // regexr.com/6ddek
    let match = isolated_indents[0].match(/([\t]|[\s]{4})/g);
    return match.length;
}

// pipe(input object, <function or >,[<fn>, <option data>])
// this returns result of all functions running in a pipe
const pipe = (firstValue, ...fns) => [...fns].reduce((v, fn) => { if (Array.isArray(fn)) { if (fn.length >= 2) { return fn[0](v, fn[1]) } } return fn(v) }, firstValue)
const print = (x) => {console.log(x); return x}
let outline_to_spreadsheet = (outline) => {
    return pipe(outline, convert_lines_into_rows,
        print,
        // final step convertion to spreadsheet component data format
        (rows) => rows.map((row,i) => {
            var row = row.trim()
            if (!is_indented_line(row)) {
                //no line indenting
                return  { component: row , lowest:0.0, highest:0, indent_level: 0, children: [
                    {
                        component: row +"-1" , lowest:0.0, highest:0, indent_level: 0,
                    }]
                 } 
            } else {
                let indent_level = get_indent_level(row)
                return   { component: row , lowest:0.0, highest:0, indent_level: indent_level }
            }

            
        }),
         
    )

}
export default outline_to_spreadsheet;