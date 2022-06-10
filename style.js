if (localStorage.getItem("Titre") != null)
t1.textContent = `${localStorage.getItem("Titre")}`;
if (localStorage.getItem("Montant") != null)
m1.textContent = `${localStorage.getItem("Montant")}`;

if (localStorage.getItem("Titre") != null)
t2.textContent = `${localStorage.getItem("Titre")}`;
if (localStorage.getItem("Montant") != null)
m2.textContent = `${localStorage.getItem("Montant")}`;



valider1.onclick = () =>{
    localStorage.setItem("Titre",titre1.value);
    localStorage.setItem("Montant",montant1.value);
}
valider2.onclick = () =>{
    localStorage.setItem("Titre",titre2.value);
    localStorage.setItem("Montant",montant2.value);
}