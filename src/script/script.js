let menuList = document.getElementById("menuList")

menuList.style.maxHeight = "0px";

function toggleMenu(){
    if(menuList.style.maxHeight == "0px")
    {
        menuList.style.maxHeight = "340px"
    }
    else{
        menuList.style.maxHeight = "0px"
    }
}

function toggleMenuClose(){
    if(menuList.style.maxHeight == "340px")
    {
        menuList.style.maxHeight = "0px"
    }
    else{
        menuList.style.maxHeight = "0px"
    }
}

function openModal(hero) {
    document.getElementById("modal").style.display = "block";
    if (hero === 'hero1') {
        document.getElementById("modal-title").innerText = "Клыков Юрий Константинович";
        document.getElementById("modal-description").innerText = 'Учился в школе №2 города Элисты. Был самым юным участником партизанского отряда №59 "Гром", который был сформирован в 1941 году. В начале ноября 1942 года партизаны выследили группу немецкой разведки и уничтожили из 25 ее членов 17 человек. До самых последних своих дней Юрий был примером мужества и героизма.';
        document.getElementById("photo").innerHTML = '<img src="src/images/num1.jpg" alt="a" class="photo">'
    } else if (hero === 'hero2') {
        document.getElementById("modal-title").innerText = "Хечеев Бембя Манджиевич";
        document.getElementById("modal-description").innerText = 'Герой Советского Союза, Участник Великой Отечественной войны. В 1938 году был призван в ряды Красной Армии. Участвовал в Сталинградском сражении. 30 апреля 1945 года, при наступлении на населенный пункт Бредиков. Бембя Хечеев поднял в атаку бойцов и первым ворвался в укрепленный пункт, распологавшийся в населенном пункте. В этом бою лично уничтожил 60 солдат и офицеров противника, подавил несколько огневых точек и взял в плен 13 немцев.';
        document.getElementById("photo").innerHTML = '<img src="src/images/num2.jpg" alt="a" class="photo">'
    } else if (hero === 'hero3') {
        document.getElementById("modal-title").innerText = "Сельгиков Михаил Арыкович";
        document.getElementById("modal-description").innerText = 'Уроженец п. Кегульта Кетченеровского района Республики Калмыкия. Участник Великой Отечественной Войны 1941 - 1945 гг. с ее первых дней. Герой Советского Союза. \n В июле 1942 г. Сельгиков назначен начальником штаба партизанского отряда имени Степана Разина. За 3 месяца отряд уничтожил около тысячи человек противника. Взорвал 2 железнодорожных моста, пустил под откос 6 поездов, подорвал около 180 автомобилей.';
        document.getElementById("photo").innerHTML = '<img src="src/images/num3.jpg" alt="a" class="photo">'
    } else if (hero === 'hero4') {
        document.getElementById("modal-title").innerText = "Молоканов Гаря Шуптурович";
        document.getElementById("modal-description").innerText = 'Боец партизанской группы №57 (командир П.Н. Яковлев, комиссар Б.У. Убушаев), которая уничтожила несколько отрядов немцев. В ночь с 22 на 23 октября 1942г. в селении Кугульма группа разгромила румынский гарнизон. В середине ноября 1942г. была окружена в 70 километрах к северу от Элисты. В течение суток вела бой против немцев, уничтожила 30 немецких военнослужащих. Была уничтожена противником.';
        document.getElementById("photo").innerHTML = '<img src="src/images/num4.jpg" alt="a" class="photo">'
    } else if (hero === 'hero5') {
        document.getElementById("modal-title").innerText = "Адучиев Бадма Хабунович";
        document.getElementById("modal-description").innerText = 'С октября 1942 года - комиссар партизанского отряда № 59. В первых числах ноября 1942 года около с. Бага-Бурул отряд наскочил на немецкую разведку в составе 8 человек, вступил в бой и уничтожил 17 немцев. Бадма Адучиев лично убил 3 немцев. За организацию партизанского отряда, за умелое руководство и воспитание личного состава, за мужество и отвагу, проявленные в борьбе с немецко-фашисткими захватчиками, Указом Президиума Верховного Совета СССР от 4 января 1968 года Бадма Хабунович Адучиев посмертно награжден медалью «За отвагу».';
        document.getElementById("photo").innerHTML = '<img src="src/images/num5.jpg" alt="a" class="photo">'
    }
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

window.onclick = function(event) {
    document.getElementById("modal")
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Инициализация карты
var map = L.map('map').setView([46.307743, 44.269759], 14);

// Добавление тайлов карты
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

// Данные для улиц
var streets = {
    lin1: [[46.306450, 44.270604], [46.310661, 44.298774]], // Пример координат для улицы 1
    lin2: [[46.314040, 44.268254], [46.314149, 44.275325]], // Пример координат для улицы 2
    lin3: [[46.311841, 44.264943], [46.311936, 44.265820], [46.311978, 44.266761], [46.311908, 44.268897], [46.311694, 44.271035], [46.311693, 44.272043], [46.311709, 44.272525], [46.311744, 44.273218], [46.311842, 44.275187]],  // Пример координат для улицы 3
    lin4: [[46.314786, 44.268018], [46.314963, 44.276939], [46.315056, 44.278907]],
    lin5: [[46.315536, 44.267765], [46.315772, 44.278595], [46.315894, 44.279636], [46.315897, 44.279706], [46.315876, 44.279898], [46.316130, 44.281786]]
};

var currentLine;

function showStreet(street) {
    // Удаление предыдущей линии, если она существует
    if (currentLine) {
        map.removeLayer(currentLine);
    }

    // Проверка, существует ли выбранная улица
    if (streets[street]) {
        // Получение линии улицы
        currentLine = L.polyline(streets[street], { color: 'red' }).addTo(map);
        map.fitBounds(currentLine.getBounds()); // Центрируем карту на новой линии
    }
}

function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdownContent");
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
}

// Закрытие выпадающего списка, если кликнули вне его
window.onclick = function(event) {
    if (!event.target.matches('.dropdown-button')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === 'block') {
                openDropdown.style.display = 'none';
            }
        }
    }
}
// 