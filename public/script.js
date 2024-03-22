const getJSON = async () => {
    try{
        // let response = await fetch("http://localhost:3000/api/crafts");
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
    let columns = [];
    for (let i = 0; i < 4; i++) {
        let column = document.createElement("div");
        column.className = "column";
        craftDiv.append(column);
        columns.push(column);
    }

    craftJSON.forEach((craft,index) => {

        let column = columns[index % 4];
        let img = document.createElement("img");
        img.src="images/" + craft.image; 
        img.onclick = () => openModalWithCraft(craft); 
        column.append(img);
        // "img.src="images/" + craft.image; THIS IS FOR RENDER

        function openModalWithCraft(craft) {
            var modal = document.getElementById("myModal");
            var modalContent = document.querySelector(".modal-content");
        
            //clear modal so it doesnt stack
            var existingFlexContainer = modalContent.querySelector(".modal-flex-container");
            if (existingFlexContainer) {
                existingFlexContainer.remove(); 
            }
        
            //flex container and append data
            var flexContainer = document.createElement("div");
            flexContainer.className = "modal-flex-container";
        
            var imgDiv = document.createElement("div");
            imgDiv.className = "modal-img-container";
            var img = document.createElement("img");
            img.src="images/" + craft.image; 
            imgDiv.append(img);
            flexContainer.append(imgDiv);
        
            var textContentDiv = document.createElement("div");
            textContentDiv.className = "modal-text-container";
        
            var name = document.createElement("h2");
            name.textContent = craft.name;
            textContentDiv.append(name);
        
            var description = document.createElement("p");
            description.textContent = craft.description;
            textContentDiv.append(description);

            var supplies = document.createElement("h2");
            supplies.innerHTML = "Supplies"
            textContentDiv.append(supplies);
        
            if (craft.supplies.length) {
                var ul = document.createElement("ul");
                craft.supplies.forEach(supply => {
                    var li = document.createElement("li");
                    li.textContent = supply;
                    ul.append(li);
                });
                textContentDiv.append(ul);
            }
        
            flexContainer.append(textContentDiv);
            modalContent.append(flexContainer);
        
            modal.style.display = "block";
        }
        
       
        function closeModal() {
            var modal = document.getElementById("myModal");
            modal.style.display = "none";
        }
        
        var span = document.querySelector(".modal-content .close");
        if (span) {
            span.onclick = closeModal;
        }
        
        window.onclick = function(event) {
            var modal = document.getElementById("myModal");
            if (event.target == modal) {
                closeModal(); 
            }
        };
        
    });
};




window.onload = () =>{
    showCrafts();
};