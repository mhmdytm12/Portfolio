fetch('http://localhost:3000/about')
  .then(response => response.json())
  .then(json => {

console.log(json)

    var allAbout = document.getElementById('allAbout');
    var content=`<div>
    <ul>
      <li><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>May</span></li>
      <li><i class="bi bi-chevron-right"></i> <strong>Website:</strong> <span>example</span></li>
      <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>7890</span></li>
      <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>USA</span></li>
      <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>myage</span></li>
      <li><i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>mydegree</span></li>
      <li><i class="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>myfreelance</span></li>
    </ul>
  </div>`


  for(let i=0 ; i<json.length ; i++)
  {

    var specificContent=content.replace("May", json[i].birthday)
    specificContent=specificContent.replace("example",json[i].website)
    specificContent=specificContent.replace("7890",json[i].phone)
    specificContent=specificContent.replace("USA",json[i].city)
    specificContent=specificContent.replace("myage",json[i].age)
    specificContent=specificContent.replace("mydegree",json[i].degree)
    specificContent=specificContent.replace("myfreelance",json[i].freelance)
    var singleService= document.createElement('div')
    singleService.className="col-lg-4 col-md-6 icon-box";
    singleService.innerHTML = specificContent;
  
    allAbout.appendChild(singleService);

  }
  })

//------------------------------------------------------------------------------------
fetch('http://localhost:3000/services')
  .then(response => response.json())
  .then(json => {

    console.log(json)

    var allServices = document.getElementById('AllServices');

    var content=`<div>
    <div class="icon"><i class="briefcase"></i></div>
    <h4 class="title"><a href="">Lorem</a></h4>
    <p class="description">Voluptatum</p>
  </div>`



  for(let i=0; i<json.length; i++)
  {
    var specificContent=content.replace("Lorem", json[i].title)
    specificContent=specificContent.replace("Voluptatum",json[i].description)
    specificContent=specificContent.replace("briefcase",json[i].icon)
    var singleService= document.createElement('div')
    singleService.className="col-lg-4 col-md-6 icon-box";
    singleService.innerHTML = specificContent;
  
    allServices.appendChild(singleService);

  }

})
 


  