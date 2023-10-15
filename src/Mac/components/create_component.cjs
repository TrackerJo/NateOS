//Import everything necessary to read and write to a file using node
const fs = require('fs');
// require('readline');

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });


  
//   readline.question('What is the name of the component?', name => {
//     console.log(`Hey there ${name}!`);
//     readline.close();
//   });

const compPath = "/Users/nathanielkemmenash/Desktop/VS Code Projects/NateOS/src/Mac/components/counter.html";

const compName = "Counter";

let compResult = "";

//Read the file
const compFile = fs.readFileSync(compPath, 'utf8');

//Split the file into an array of lines
const compLines = compFile.split(/\r?\n/);

let plainElements = [];
let sortedElements = [];

let variableNames = [];
let functions = [];
let numElementsInContainers = [];

let newCompFile = "";

const voidElements = ["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"];
const eventElements = ["onabort", "onautocomplete", "onautocompleteerror", "onblur", "oncancel", "oncanplay", "oncanplaythrough", "onchange", "onclick", "onclose", "oncontextmenu", "oncuechange", "ondblclick", "ondrag", "ondragend", "ondragenter", "ondragexit", "ondragleave", "ondragover", "ondragstart", "ondrop", "ondurationchange", "onemptied", "onended", "onerror", "onfocus", "oninput", "oninvalid", "onkeydown", "onkeypress", "onkeyup", "onload", "onloadeddata", "onloadedmetadata", "onloadstart", "onmousedown", "onmouseenter", "onmouseleave", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "onmousewheel", "onpause", "onplay", "onplaying", "onprogress", "onratechange", "onreset", "onresize", "onscroll", "onseeked", "onseeking", "onselect", "onshow", "onsort", "onstalled", "onsubmit", "onsuspend", "ontimeupdate", "ontoggle", "onvolumechange", "onwaiting"];
readFile(compLines);


function readFile(fileLines){
    let inComment = false;
    fileLines.forEach((line) => {
        //check if line is empty OR if line is a comment
        if(line === ""){
            return;
        }
        if(line.includes("<!--")){
            inComment = true;
        }
        let element = {};
        element.value = cleanLineSpaces(line);
        let splitLine = line.split("<");
        if(splitLine[1]){
            element.type = line.split("<")[1].split(" ")[0];
        }

        if(line.includes("/>")){
            element.hasChildren = false;
        }
        //Check if contains two <
        else if((line.split("<").length - 1) == 2){
            element.hasChildren = false;
        } else if(line.includes("</")){
            element.hasChildren = false;
            element.isClosing = true;
        } else if(voidElements.includes(element.type)){
            element.hasChildren = false;
        }
         else {
            element.hasChildren = true;
        }
        plainElements.push(element);
    });
        
}

function cleanLineSpaces(line){
    let splitLine = line.split("<");
    let newLine = "";
    splitLine.forEach((line, index) => {
        if(index === 0){
            newLine += "<";
            return;
        }
        newLine += line;
    });
    return newLine;
}

function sortElements(elements){
    //console.log(elements);
    let newElements = [];
    let parentIndexs = [];
    elements.forEach((element, index) => {
        if(index === 0){
            element.children = [];
            newElements.push(element);
            parentIndexs.push(parentIndexs.length);
            return;
        }
        if(element.hasChildren){
            element.children = [];
            newElements.push(element);
            parentIndexs.push(parentIndexs.length);
            return;
        }
        if(element.isClosing){
            let lastParent = parentIndexs[parentIndexs.length - 1];
            parentIndexs.pop();
            if(parentIndexs.length === 0){
                return;
            }
            newElements[parentIndexs[parentIndexs.length - 1]].children.push(newElements[lastParent])
            //Remove last parent from newElements
            newElements.splice(lastParent, 1);
            return;
        }
        // console.log(parentIndexs, "PARENT INDEXS");
        // console.log(parentIndexs[parentIndexs.length - 1], "PARENT INDEX");
        // console.log(element, "ELEMENT");
        // console.log(newElements, "New ELEMENTs");
        newElements[parentIndexs[parentIndexs.length - 1]].children.push(element);


    });
    return newElements;

}

function visualizeSortedElements(elements){
    elements.forEach((element,index) => {
        console.log(element.value);
        if(index === elements.length - 1){
            console.log("END");
        }
        if(element.children){
            visualizeSortedElements(element.children);
        }
    });
}

console.log(plainElements);
//createCompFile(sortElements(plainElements));

function createCompFile(elements, parentName, isFirst){
    
    elements.forEach((element, index) => {
        let elementAttributes = getElementAttributes(element, parentName);
      // console.log(elementAttributes, "ELEMENT ATTRIBUTES");
       const elementName = elementAttributes[elementAttributes.findIndex(obj => obj.key === 'eName')].value;

       //Remove elementName from attributes
         elementAttributes.splice(elementAttributes.findIndex(obj => obj.key === 'eName'), 1);
         newCompFile += `\tconst ${elementName} = document.createElement("${element.type}");\n`;

            elementAttributes.forEach((attribute, index) => {
               
                if(attribute.key === "textContent"){
                    newCompFile += "\t" + elementName + ".textContent = `" + attribute.value + "`;\n";
                    return;
                }
                if(attribute.isEvent){
                    newCompFile += "\t" + elementName + ".addEventListener('" + attribute.key + "', " + attribute.value + ");\n";
                    return;
                }
                newCompFile += "\t" + elementName + ".setAttribute('" + attribute.key + "', `" + attribute.value + "`);\n";
            });
        newCompFile += "\n";

       if(element.children){
            createCompFile(element.children, elementName, false);
       }

       if(!isFirst){
        newCompFile += `\t${parentName}.appendChild(${elementName});\n`;
       } else {
        newCompFile += `\treturn ${elementName};\n`;
         }

         newCompFile += "\n";

    });
    if(isFirst){
        let params = "";
        variableNames.forEach((variableName, index) => {
            if(index === variableNames.length - 1){
                params += variableName;
                return;
            }
            params += variableName + ", ";
        });
        //Append to beginning of file
        newCompFile = `function create${compName}Comp(${params}){\n` + newCompFile;

        newCompFile += "}";
    }
}

function getElementAttributes(element, parentName){
    let attributes = [];
   if(element.value.includes(`/${element.type}`)){
    console.log(element.value, "VALUE");
    let textContent = element.value.split(`/${element.type}>`)[0];
    let textSplit = textContent.split(">");
    textContent = textSplit[textSplit.length - 1];
    
    // let textContent = element.value.split(`${element.type}>`)[].split(`/${element.type}`)[0];
    console.log(textContent, "TEXT CONTENT")
    let textContentChars = textContent.split("");
    let currentWord = "";
    let isVariable = false;
    let variableName = "";
    textContentChars.forEach((char) => {
        if(char === "{"){
            isVariable = true;
            return;
        }
        if(char === "}"){
            isVariable = false;
            if(!variableNames.includes(variableName)){
                variableNames.push(variableName);
            }
            currentWord += "${" + variableName + "}";
            variableName = "";
            return;
        }
        if(isVariable){
            variableName += char;
            return;
        }
        currentWord += char;
    });

      attributes.push({key: "textContent", value: currentWord});
      
      if(element.value.includes('">')){
        element.value = element.value.split('">')[0];
        element.value += '"';
    } else if(element.value.includes(" >")){
        element.value = element.value.split(" >")[0];
    }
   }
   if(element.value.includes("/>")){
       element.value = element.value.split("/>")[0] + ">";
    }
    //console.log(element.value, "ELEMENT VALUE");
    // let splitElement = element.value.split(`<${element.type}`)[1].split(">")[0];
    console.log(element.value, "ELEMENT VALUE");
    let splitElement = element.value.split(`<${element.type}`)[1];
    console.log(splitElement, "SPLIT ELEMENT PRE");
   

    console.log(splitElement, "SPLIT ELEMENT");
    let elementChars = splitElement.split("");
    let attribute = {key: "", value: "", isEvent: false};
    let inQuotes = false;
    let currentWord = "";
    let isVariable = false;
    let variableName = "";
    let isEvent = false;
    let eventContent = "";
    
    elementChars.forEach((char) => {
        if(char === " " && !inQuotes){
            return;
        }
        if(char === "=" && !inQuotes){
            attribute.key = currentWord;
            if(eventElements.includes(currentWord)){
                console.log(currentWord,"EVENT");
                isEvent = true;
                attribute.isEvent = true;
            }
            currentWord = "";
            return;
        }
        if(char === '"' && !inQuotes){
            inQuotes = true;
            console.log("IN QUOTES", isEvent);
            return;
        }
        if(char === '"' && inQuotes){
            inQuotes = false;
            console.log(eventContent, "CURRENT WORD");
            if(isEvent){
                
                let eventParameters = eventContent.split("(")[0].split(")")[0];
                let eventFunction = eventContent.split("{")[1].split("}")[0];
                attribute.value = `(${eventParameters}) => {${eventFunction}}`;
                attribute.isEvent = true;
                isEvent = false;
                
                

            } else {
                
                attribute.value = currentWord;
               
            }
            console.log(attribute, "ATTRIBUTE");
            attributes.push(attribute);
            attribute = {key: "", value: "", isEvent: false};
            currentWord = "";
            return;
        }
        if(char === "{" && !isEvent){
            isVariable = true;
            return;
        }
        if(char === "}" && isVariable){
            isVariable = false;
            if(!variableNames.includes(variableName)){
                variableNames.push(variableName);
            }
            currentWord += "${" + variableName + "}";
            variableName = "";
            
            return;
        }
        if(isVariable){
            variableName += char;
            return;
        }
            
        if(isEvent){
            eventContent += char;
            return;
        }

        currentWord += char;
        
        

    })

    //Check if attributes has eName
    let hasEName = false;
    attributes.forEach((attribute) => {
        if(attribute.key === "eName"){
            hasEName = true;
        }
    });
    if(!hasEName){
        if(!numElementsInContainers[parentName]){
            numElementsInContainers[parentName] = {};
        }
        if(numElementsInContainers[parentName][element.type]){
            numElementsInContainers[parentName][element.type] += 1;
        } else {
            numElementsInContainers[parentName][element.type] = 1;
        }

        let elementName = parentName + capitializeFirstLetter(element.type) + numElementsInContainers[parentName][element.type];
        //console.log(elementName, "ELEMENT NAME");
        attributes.push({key: "eName", value: elementName});
    }

    return attributes;
    
}

function capitializeFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}



createCompFile(sortElements(plainElements), null, true);
//console.log(newCompFile)
//Print newCompFile to file
fs.writeFileSync(`./src/Mac/Components/${compName}Comp_Created.js`, newCompFile);
//onsole.log(sortElements(plainElements));