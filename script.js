

function change()
{
    let skill = document.getElementById("skill").value;
    let percentage = document.getElementById("percentage").value;
    let bgColor = document.getElementById("bgColor").value;
    let svgBg = document.getElementById("svgBg").value;
    let innerShadowSvg = document.getElementById("innerShadowSvg").value;
    let skillColorLine = document.getElementById("skillColorLine");
    let percentageColor = document.getElementById("percentageColor").value;
    let textColor = document.getElementById("textColor").value;
    let mainContainerShadow = document.getElementById("mainContainerShadow").value;
  
document.querySelector(".card").style.backgroundColor = bgColor;
document.querySelector(".percent").style.backgroundColor = svgBg;
document.querySelector(".percentValue").innerHTML = percentage + "%";
document.querySelector(".percentValue").style.color = percentageColor;
document.querySelector(".text").innerHTML = skill;
document.querySelector(".text").style.color = textColor;
document.querySelector("svg circle:nth-child(2)").style.stroke = skillColorLine.value;
document.querySelector(" svg circle:nth-child(2)").style.strokeDashoffset = `calc(440 - (440 * ${percentage}) / 100)`;
document.querySelector("svg circle").style.stroke = innerShadowSvg;                
document.querySelector(".card").style.boxShadow = `0 15px 35px ${mainContainerShadow}`;
}