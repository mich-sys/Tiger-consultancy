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
{/* <a href="mailto:recipient@example.com?subject=Hello%20world&body=Hi%20there%2C%0A%0AThis%20is%20a%20test%20email.%0A%0ABest%2C%0AJohn">Send email</a> */}

function parser()
{
  const area = document.getElementById("reason").value;
  const fname = document.getElementById("fname").value;
  const mname = document.getElementById("mname").value;
  const lname = document.getElementById("lname").value;
  const dob = document.getElementById("DOB").value;
  const edu = document.getElementById("edu").value;
  const add = document.getElementById("address").value;
  const num = document.getElementById("num").value;

  let str = `mailto:wisdompaul273@gmail.com?subject=New%20Message&body=First-name:%20${fname}%0AMiddle-name:%20${mname}%0ALast-name:%20${lname}%0ADOB:%20${dob}%0AEducational%20Qualification:%20${edu}%0AAddress:%20${add}%0APhone-Number:%20${num}%0AReason%20for%20consultation:%20${area}%0A`;
  window.open(str, "_blank");
}