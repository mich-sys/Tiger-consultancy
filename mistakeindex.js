let state = "closed";
      let m = document.querySelector(".men");
      let n = document.querySelector(".br");
      function myFunction(x) {
        if (state == "closed") {
          m.style.visibility = "initial";
          n.style.visibility = "initial";
          state = "open";
        } else {
          m.style.visibility = "hidden";
          n.style.visibility = "hidden";
          state = "closed";
        }
        x.classList.toggle("change");
      }

      let carousel = document.getElementById("carousel");
      let images = carousel.getElementsByTagName("img");
      let currentIndex = 0;
      
      setInterval(function() {
        images[currentIndex].style.display = "none";
        currentIndex++;
        if (currentIndex >= images.length) {
          currentIndex = 0;
        }
        images[currentIndex].style.display = "block";
      }, 3000);
let btn = document.querySelector(".btn");
btn.addEventListener('click', parser);

let y = 0;
function parser()
{
  let form = document.querySelector(".form");
  let para = document.createElement("p");
  para.textContent =  "Please Input All Fields";
  para.style.color = "red";
  para.style.textAlign = "center";
  para.style.fontSize = "25px";
  let area = document.getElementById("reason").value;
  let fname = document.getElementById("fname").value;
  let mname = document.getElementById("mname").value;
  let lname = document.getElementById("lname").value;
  let dob = document.getElementById("DOB").value;
  let edu = document.getElementById("edu").value;
  let add = document.getElementById("address").value;
  let num = document.getElementById("num").value;
  if (area == '' || fname == '' ||  mname == '' ||  lname == '' || dob == '' || edu == '' || add == '' || num == '')
  {
    if (y != 0)
    {
      form.removeChild(para);
      y = y-1;
    }
    form.appendChild(para);
    y = y+1;
  }
  else{
  // if (y != 0)
  // {
  //   para.textContent='';
  //   y = 0;
  // }
  let str = `mailto:ejehtiger222@gmail.com?subject=New%20Message&body=First-name:%20${fname}%0AMiddle-name:%20${mname}%0ALast-name:%20${lname}%0ADOB:%20${dob}%0AEducational%20Qualification:%20${edu}%0AAddress:%20${add}%0APhone-Number:%20${num}%0AReason%20for%20consultation:%20${area}%0A`;
  window.open(str, "_blank");
  location.reload(true);
}
}