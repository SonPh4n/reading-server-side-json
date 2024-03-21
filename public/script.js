const getJSON = async () => {
    try{
        let response = await fetch("http://localhost:3000/api/crafts");
        return await response.json();
    } catch(error){
        console.log("error retrieving json");
        return "";
    }
};


const showCrafts = async () => {
    const craftJSON = await getJSON();

    if(craftJSON == ""){
        return;
    }

   
    let craftDiv = document.getElementById("craft-list");

    craftJSON.forEach((craft) => {
        let section = document.createElement("section");
        craftDiv.append(section);
        let title = craft.name;

        let h3 = document.createElement("h3");
        section.append(h3);
        h3.innerHTML = craft.name;

        let img = document.createElement("img");
        section.append(img);
        img.src="http://localhost:3000/images/crafts/" + craft.image;
    });
};




window.onload = () =>{
    showCrafts();
};