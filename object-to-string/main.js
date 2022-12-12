const computer = {
	id: 1,
	manufacturer: "Apple",
	make: "Macbook",
	model: "Pro",
	specs: {
		memory: 32,
		hardDrive: "500 GB",
		processor: 2.4
	}
}

// define a function to convert an object into a string


const computerHTMLMaker = (computer) => {
    const computerHTMLSectionWrap = `<section id="computer--${computer.id}"> \n\t<h1>${computer.manufacturer} ${computer.make}</h1>\n\t<div>Model: ${computer.model}</div>\n\t<div>Memory: ${computer.specs.memory} GB</div>\n\t<div>Hard Drive Space: ${computer.specs.hardDrive}</div>\n\t<div> Processsor speed: ${computer.specs.processor} Ghz</div>\n</section>` 

    return computerHTMLSectionWrap
}

let finalFormat = (computerHTMLMaker(computer))

console.log(finalFormat)


//find how to get the key name out of object
//console.log(Object.keys(computer)[3])


//what it should look like

/*
<section id="computer--1">
	<h1>Apple Macbook</h1>
	<div>Model: Pro</div>
	<div>Memory: 32 GB</div>
	<div>Hard drive space: 500 GB</div>
	<div>Processor speed: 2.4 Ghz</div>
</section>
*/