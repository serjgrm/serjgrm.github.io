function tabs() {
    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsParent = document.querySelector('.tabheader__items'),
        tabContent = document.querySelectorAll('.tabcontent');
    function showTab(i) {
        tabContent[i].classList.add('show');
        tabs[i].classList.add('tabheader__item_active');
    }
    function hideTab() {
        tabContent.forEach((item, i) => {
            item.classList.remove('show');
        });
        tabs.forEach((item, i) => {
            item.classList.remove('tabheader__item_active');
        });
    }
    tabsParent.addEventListener('click', (e) => {
        tabs.forEach((item, i) => {
            if (e.target === item) {
                hideTab();
                showTab(i);
            }
        });
    });
}
export default tabs;



