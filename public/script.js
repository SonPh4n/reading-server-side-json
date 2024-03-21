const getJSON = async () => {
    try{
        let response = await fetch("https://reading-server-side-json-clb5.onrender.com/api/crafts");
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

        let description = document.createElement("p");
        section.append(description);
        img.src="https://reading-server-side-json-clb5.onrender.com/" + craft.image;
    });
};




window.onload = () =>{
    showCrafts();
};