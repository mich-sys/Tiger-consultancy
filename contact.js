let state = "closed";
      // let m = document.querySelector(".men");
      // let n = document.querySelector(".br");
      let t = document.querySelector(".test");
      let list = document.getElementById("mylist");
      let data = ['<a href = "/index.html">Home</a>', '<a href = "/services.html">Our Services</a>', '<a href = "/services.html">Products</a>', '<a href = "/about.html">About Us</a>', '<a href = "/contact.html">Contact Us</a>'];
      function myFunction(x) {
        if (state == "closed") {
          // m.style.visibility = "initial";
          // n.style.visibility = "initial";
          t.style.visibility = "initial";
          data.forEach((item)=>{
            let li = document.createElement("li");
            // li.innerText = item;
            li.innerHTML = item;
            list.appendChild(li);
            li.style.listStyleType = 'none';
          })
          state = "open";
        } else {
          // m.style.visibility = "hidden";
          // n.style.visibility = "hidden";
          t.style.visibility = "hidden";
          state = "closed";
          list.innerHTML = "";
        }
        x.classList.toggle("change");
      }
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