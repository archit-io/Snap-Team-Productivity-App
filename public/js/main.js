document.getElementById('features').onclick = openFeaturesMenu

function openFeaturesMenu() {
    document.querySelector('#section1').classList.toggle("active")
}
 
document.getElementById('company').onclick = openCompanyMenu

function openCompanyMenu() {
    document.querySelector('#section2').classList.toggle("active")
}
