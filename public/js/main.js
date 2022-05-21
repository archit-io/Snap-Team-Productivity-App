document.getElementById('features').onclick = openFeaturesMenu

function openFeaturesMenu() {
    document.querySelector('#section1').classList.toggle("active")
    document.getElementById('features').classList.toggle("deactivate")
    document.getElementById('featuresArrowUp').classList.toggle("activate")
}

document.getElementById('featuresArrowUp').onclick = closeFeaturesMenu 

function closeFeaturesMenu() {
    document.querySelector('#section1').classList.toggle("active")
    document.getElementById('features').classList.toggle("deactivate")
    document.getElementById('featuresArrowUp').classList.toggle("activate")
}


 
document.getElementById('company').onclick = openCompanyMenu

function openCompanyMenu() {
    document.querySelector('#section2').classList.toggle("active")
    document.getElementById('company').classList.toggle("deactivate")
    document.getElementById('companyArrowUp').classList.toggle("activate")
}

document.getElementById('companyArrowUp').onclick = closeCompanyMenu

function closeCompanyMenu() {
    document.querySelector('#section2').classList.toggle("active")
    document.getElementById('company').classList.toggle("deactivate")
    document.getElementById('companyArrowUp').classList.toggle("activate")
}



document.getElementById('featuresMobile').onclick = openFeaturesMenuMobile

function openFeaturesMenuMobile() {
    document.querySelector('#section1Mobile').classList.toggle('active')
    document.getElementById('featuresMobile').classList.toggle("deactivate")
    document.getElementById('featuresMobileArrowUp').classList.toggle("activate")
}


document.getElementById('featuresMobileArrowUp').onclick = openFeaturesMenuMobile

function closeFeaturesMobileMenu() {
    document.querySelector('#section1Mobile').classList.toggle("active")
    document.getElementById('featuresMobile').classList.toggle("deactivate")
    document.getElementById('featuresMobileArrowUp').classList.toggle("activate")    
}



document.getElementById('companyMobile').onclick = openCompanyMenuMobile

function openCompanyMenuMobile() {
    document.querySelector('#section2Mobile').classList.toggle('active')
    document.getElementById('companyMobile').classList.toggle("deactivate")
    document.getElementById('companyMobileArrowUp').classList.toggle("activate")
}

document.getElementById('companyMobileArrowUp').onclick = closeCompanyMenuMobile

function closeCompanyMenuMobile() {
    document.querySelector('#section2Mobile').classList.toggle("active")
    document.getElementById('companyMobile').classList.toggle("deactivate")
    document.getElementById('companyMobileArrowUp').classList.toggle("activate")    
}





document.getElementById('menuClosed').onclick = openMainMenu

function openMainMenu() {
    document.getElementById('menuClosed').classList.toggle('deactivate')
    document.getElementById('openedMenu').classList.toggle('activate')
}


document.getElementById('menuOpen').onclick = closeMainMenu

function closeMainMenu() {
    document.getElementById('openedMenu').classList.toggle('activate')
    document.getElementById('menuClosed').classList.toggle('deactivate')
}