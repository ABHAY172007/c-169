AFRAME.registerComponent("handleMarker", {
    init: function () {
        this.el.addEventlistener("markerfound", () => {
            this.handleMarkerfound()
        })
        this.el.addEventlistener("markerlost", () => {
            this.handleMarkerlost()
        })


    },
    handleMarkerfound: function () {
        var buttonDiv = document.getElementById("button-div")
        buttonDiv.style.display = "flex"
       
        var orderButton = document.getElementById("order-button")



        
        ratingButton.addEventListener("click", ()=> {
            swal({
                icon: "https://i.imgur.com/4NZ6uLY.jpg",
                tittle: "thankuhh for ur order sir/mam",
                text: "Your order will be served soon at your table!"


            })
        })




    },

    handleMarkerlost: function () {
        var buttonDiv = document.getElementById("button-div")
        buttonDiv.style.display = "none"

    }
















})
