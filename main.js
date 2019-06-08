// Calc

    let persons = document.querySelectorAll(".counter-block-input")[0],
        restDays = document.querySelectorAll(".counter-block-input")[1],
        place = document.querySelector("#select"),
        totalValue = document.querySelector("#total"),
        personsSum = 0,
        daysSum = 0,
        total = 0;

    totalValue.innerHTML = 0;

    persons.addEventListener("change", function() {
        personsSum = +this.value;
        total = (personsSum + daysSum) * 4000;

        if(daysSum == "") {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }

        if(personsSum == "") {
            totalValue.innerHTML = 0; 
        }
    });

    restDays.addEventListener("change", function() {
        daysSum = +this.value;
        total = (personsSum + daysSum) * 4000;

        if(personsSum == "") {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }

        if(daysSum == "") {
            totalValue.innerHTML = 0; 
        }

    });

    place.addEventListener("change", function() {
        if(daysSum == "" || personsSum == "") {
            total.textContent = 0; 
        } else {
            let a = total;
            totalValue.innerHTML = a * this.options[this.selectedIndex].value;
        }
    });