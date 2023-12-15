const chartCG = {
    charts: document.querySelectorAll(".chart"),
    rotate: function(chart){
        let circle = chart.querySelector(".circle");
        let leftCircle = chart.querySelector(".left-circle");
        let rightCircle = chart.querySelector(".right-circle");
        let pct = parseInt(circle.getAttribute("data-pct"));
        let deg = (pct * 360) / 100;
        if(pct <= 50){
            rightCircle.classList.remove("over-50");
            leftCircle.classList.add("under-50");
            rightCircle.style.transform = `rotate(${deg}deg)`;
        }
        else if(pct > 50 && pct <= 100){
            rightCircle.classList.add("over-50");
            leftCircle.classList.remove("under-50");
            leftCircle.style.transform = `rotate(${180+deg}deg)`;
        }
        if(pct > 100){
            rightCircle.classList.add("over-50");
            leftCircle.style.transform = `rotate(${180}deg)`;
        }
    },
    init: function(){
        chartCG.charts.forEach(chart => chartCG.rotate(chart));
    },
};
const rotateCG = {
    rCharts: document.querySelectorAll(".chart[data-rotate='true']"),
    startRotation: function(chart){
        let circle = chart.querySelector(".circle");
        let pct = parseInt(circle.getAttribute("data-pct"));
        pct = (pct >= 100)? 0: pct+1;
        circle.setAttribute("data-pct", pct);
        chartCG.rotate(chart);
    },
    init: function(){
        rotateCG.rCharts.forEach(chart => {
            setInterval(rotateCG.startRotation, 500, chart);
        });
    }
};
chartCG.init();
rotateCG.init();