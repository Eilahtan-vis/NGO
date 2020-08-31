// data 
d3.csv("data/tdonateurs.csv", function(d) {
    return {
        Année: Number(d.Année),
        Groupe1: Number(d.G0à150),
        Groupe4: Number(d.G1000à3000),
        Groupe2: Number(d.G150à500),
        Groupe5: Number(d.G3000à),
        Groupe3: Number(d.G500à1000)
    }
})

// const 
const width = 500;
const height = 500;
const margin = { top: 20, right: 0, bottom: 20, left: 40 }

// svg 
const svg = d3.select('#donateurs')
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .attr('style', 'font: 10px sans-serif')

 // x axis
 const x = d3.scaleBand()
        .domain(data.map(d => d.Année))
        .range([margin.left, width - margin.right])
        .padding(0.1)
        .round(true)
 svg.append('g')
        .attr('transform', `translate(0, ${height - margin.bottom})`)
        .call(d3.axisBottom(x))
        .call(g => g.select('.domain').remove())
 
 // y axis
 const y = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.G0à150)])
        .range([height - margin.bottom - 5, margin.top])
        .interpolate(d3.interpolateRound)
 svg.append('g')
        .attr('transform', `translate(${margin.left}, 0)`)
        .call(d3.axisLeft(y))
        .call(g => g.select('.domain').remove())       

 
        

